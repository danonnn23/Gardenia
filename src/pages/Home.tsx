import heroBg from '../assets/hero_bg.jpg';

const Home = () => {
    return(
        <>
            <div style={{ backgroundImage: `url(${heroBg})` }}
            className='w-screen h-screen bg-cover bg-center bg-no-repeat'>
            </div>        
        </>
    );
};

export default Home;