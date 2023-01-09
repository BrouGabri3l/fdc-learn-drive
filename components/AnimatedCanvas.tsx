import Canvas from "./Canvas";

const AnimatedCanvas = (props) => {
    const { connectDistance, speed, lineColor, pointColor, pointQuantity } =
      props;
    const CONNECT_DISTANCE = connectDistance || 150;
    const distance = (point, other) => {
      return Math.sqrt((other.x - point.x) ** 2 + (other.y - point.y) ** 2);
    };
    const getRandomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };
    const movePoint = (point) => {
      point.x += point.s * Math.cos(point.a);
      point.y += point.s * Math.sin(point.a);
    };
    const drawPoint = (point, context) => {
      context.beginPath();
      context.fillStyle = pointColor || 'white'
      context.arc(point.x, point.y, 8, 0, 2 * Math.PI);
      context.fill();
    };
    const drawLine = (point, other, d, context) => {
      context.beginPath();
      context.lineWidth = 2
      context.moveTo(point.x, point.y);
      context.lineTo(other.x, other.y);
      context.strokeStyle = lineColor ?? `rgba(255,255,255, ${Math.abs(
        d / CONNECT_DISTANCE - 1
      )})`;
      context.stroke();
    };
    const TOTAL_POINTS = pointQuantity || 20;
    let points = [];
    const loop = (context) => {
      const canvas = context.canvas;
      for (let i = points.length; i < TOTAL_POINTS; i++) {
        points.push({
          x: getRandomInRange(0, canvas.width),
          y: getRandomInRange(0, canvas.height),
          a: getRandomInRange(0, 360),
          s: speed || 0.1,
        });
      }
      context.clearRect(0, 0, canvas.width, canvas.height);
      points.forEach((point) => {
        movePoint(point);
      });
      points = points.filter(
        (point) =>
          point.x >= 0 &&
          point.x < canvas.width &&
          point.y >= 0 &&
          point.y < canvas.height
      );
  
      points.forEach((point) => {
        drawPoint(point, context);
      });
      points.forEach((point) => {
        points.forEach((other) => {
          if (point === other) {
            return;
          }
          const d = distance(point, other);
          if (d < CONNECT_DISTANCE) {
            drawLine(point, other, d, context);
          }
        });
      });
    };
  
    return <Canvas draw={loop} />;
  };
  export default AnimatedCanvas