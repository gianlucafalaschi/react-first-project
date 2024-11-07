function TestTailwind() {
    return (
        <section className="bg-slate-300">
            <div className="text-3xl font-bold underline">Tailwind test</div>
            <div className="rounded-xl bg-white p-5 m-5 w-[300px] border-2 border-slate-600">
                <h2 className="text-black text-center outline">Titolo</h2>
                <p className="text-slate-500 mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore autem earum exercitationem velit. Temporibus voluptates natus sapiente officiis soluta deserunt. Ad iure, est adipisci velit minima nulla temporibus aliquid quos sunt animi quaerat iste asperiores et sed fuga enim deleniti nostrum. Quod maiores quidem modi harum alias. Aliquam, consequuntur!
                </p>
                <input type="checkbox" className="accent-blue-500" />
            </div>

            <p className="font-san text-lg italic font-bold">Ad esempio sono un bellissimo carattere</p>
            <p className="font-serif tracking-widest">Ad esempio sono un bellissimo carattere</p>
            <p className="font-mono">Ad esempio sono un bellissimo carattere</p>

            <ul className="list-disc list-inside	">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <p className="text-left text-slate-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, fugiat cumque! Assumenda repellendus quasi autem labore molestiae, incidunt, recusandae dignissimos iure amet sed reprehenderit libero harum corrupti. Obcaecati, perspiciatis alias.</p>

            <div className="bg-slate-500 w-[300px] h-[300px] ml-10 p-[10px]">
                <div className="flex space-x-3">
                    <div className="bg-pink-500">1</div>
                    <div className="bg-pink-500">2</div>
                    <div className="bg-pink-500">3</div>
                    <div className="bg-pink-500">4</div>
                </div>
            </div>
            <div className="bg-red-500 w-auto max-w-screen-lg min-h-32 ">
                <h1>Ciao</h1>
            </div>
        </section>
        

    )
}

export default TestTailwind