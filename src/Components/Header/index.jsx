const Header = () => {
    return(
        <header className="flex justify-between w-full mt-20">
            <section className="flex justify-center items-center flex-col w-2/4 ">
                <p>Summer Big Sale</p>
                <h2>Up To 70% off</h2>
                <h3>ArmChair brands</h3>
            </section>
            <figure className="w-2/4">
                <img className="" src="https://images.unsplash.com/photo-1640938776314-4d303f8a1380?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="imag provicional" />
            </figure>
        </header>
    )
}

export  { Header }