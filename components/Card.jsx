function Card(props) {
    const { Icon, children } = props
    return (
        <article className="text-center items-center p-8 flex flex-col gap-4 border-solid border-secondary-gray-medium border-2 max-w-xs bg-white">
            <span>
                {Icon &&
                    <Icon className="text-terciary-orange w-12 h-12" />
                }
            </span>
            <p className="w-64 text-primary-gray-dark">
                {children}
            </p>
        </article>
    )
}
function CardList(props) {
    const {list} = props
    return (
        <ul>
            {list.map(item=> (
                <Card icon={item.icon}>item.text</Card>
            ))}
        </ul>
    )
}
function CardListHeading() {
    return (
        <></>
    )
}

export { Card, CardList, CardListHeading }