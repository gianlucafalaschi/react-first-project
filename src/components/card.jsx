/* Props (Properties) */
/* 
function Card(props) {
    const title = props.title;
    const description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat recusandae non deleniti harum. Molestias?";
    const imgUrl = props.imgUrl; 
*/

/* A cleaner way to pass the Props */ /* Note: with "children" I only pass the props inside <Card>I pass this</Card>, in this case the text lorem ipsum  */
function Card({title, imgUrl, children}) {
    
    return(
        <div className="rounded-md overflow-hidden bg-zinc-950">
            <img src={imgUrl} alt="" />
            <div className="flex flex-col p-4">
                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <p className="text-gray-500">
                    {children}
                </p>
            </div>
        </div>
    )
}

export default Card;