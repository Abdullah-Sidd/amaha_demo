function Blogs() {
    return (
        <section className="bg-white dark:bg-gray-900 max-w-7xl mx-auto">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white underline">Amaha Resources</h1>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: 'url("https://assets.theinnerhour.com/bloguploads/Cultivating%20Hope%20-%20kraked1600419488874.jpg")' }}>
                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white"> Cultivating Hope In Our Lives</h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-500  dark:text-blue-400 ">Article | 3 min.</p>
                        </div>
                    </div>
                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: 'url("https://assets.theinnerhour.com/bloguploads/Time%20to%20ask%20for%20help1628148819554.png")' }}>
                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit
                                collections</h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Article | 3 min.</p>
                        </div>
                    </div>
                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: 'url("https://assets.theinnerhour.com/bloguploads/Coping%20with%20Uncertainty.jpg")' }}>
                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Coping with Uncertainty</h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Article | 3 min.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs