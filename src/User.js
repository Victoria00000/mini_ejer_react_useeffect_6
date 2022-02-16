export const User = ({ data }) => {
    return (
        <ul>
            {data.map((obj) => {
                return (
                    <li key={obj.email}>
                        <p>{data.name.first}</p>
                        <div><img src={data.picture.large} alt='img' /></div>
                    </li>
                )
            })}
        </ul>
    )
};
