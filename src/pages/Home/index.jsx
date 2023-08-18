import Table from '../../components/Table'

const Home = (props) => {
    let data = [
        { name: 'Maria', birth: '15/08/2000', email: 'maria@gamil.com' },
        { name: 'João', birth: '16/08/2000', email: 'joao@gamil.com' },
        { name: 'José', birth: '17/08/2000', email: 'jose@gamil.com' }
    ];

    return (
        <div className='flex justify-center p-5'>
            <div className="grid grid-rows border rounded-lg w-1/2">
                {data.map((item, idx) =>
                    <div className='flex'>
                        <div className={`grid grid-flow-col py-3 pl-3 w-full ${ idx > 0 ? 'border-t' : '' }`}>
                            <div>{item.name}</div>
                            <div>{item.birth}</div>
                            <div>{item.email}</div>
                        </div>
                        <div className={`grid grid-flow-col py-3 pr-3 ${ idx > 0 ? 'border-t' : '' }`}>
                            <div className='flex justify-end w-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;