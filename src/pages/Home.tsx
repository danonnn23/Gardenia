import heroBg from '../assets/hero_bg04.jpg'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom'
import Features from '../components/Features.tsx'
import DeliveryMap from '../components/DeliveryMap.tsx'
import { MousePointerClick, Flower2, Truck, Camera } from 'lucide-react'

const heroTitles = [
    "Краса, що розквітає для вас",
    "Естетика у кожній деталі, ніжність у кожному букеті",
    "Природа, втілена в букеті",
    "Ваші почуття, розказані квітами",
    "Дозвольте квітам сказати те, на що не вистачає слів"
]

const Home = () => {
    const [heroIndex, setHeroIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroTitles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

const FeaturesList = [
    { id: 1, title: "Обираєте букет", icon: MousePointerClick },
    { id: 2, title: "Ми збираємо свіжі квіти", icon: Flower2 },
    { id: 3, title: "Кур'єр везе радість", icon:  Truck},
    { id: 4, title: "Фотозвіт перед доставкою", icon: Camera }
]

    return (
        <>
            <div className='w-screen flex flex-col items-center gap-10'>
                <section className="w-11/12  grid grid-cols-1">
                    <h1 className='h-30 flex items-center justify-center text-5xl font-great-vibes text-black text-center my-20'>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={heroTitles[heroIndex]}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className='block'
                            >
                                {heroTitles[heroIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </h1>
                    <img src={heroBg} alt="" className='rounded-4xl' />
                    <h3 className='text-3xl font-serif text-center text-emerald-950 my-10'>Відкрийте світ, де кожен букет розповідає історію. Наші флористи створюють не просто композиції, а незабутні моменти для вас та ваших близьких.</h3>
                    <div className='flex justify-center'>
                        <NavLink to="/shop" className="bg-[#8d9e88] px-5 py-4 text-4xl rounded-2xl">Обрати букет</NavLink>
                    </div>
                </section>
                <section className='w-11/12 grid grid-cols-2 gap-5 border-y-2 border-black pb-5'>
                    <h1 className='col-span-2 text-center font-great-vibes text-7xl my-5'>Як ми працюємо</h1>
                    {FeaturesList.map(item => (
                        <Features key={item.id} title={item.title} icon={item.icon} />
                    ))}
                </section>
            </div>
        </>
    )
}

export default Home