import { FaRegCalendarAlt, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router';

const data = [
    {
        title: 'Приказ начальника Государственной инспекции по надзору в электроэнергетике «Узгосэнергонадзор», зарегистрировано 10.09.2004 г., рег. номер 1405',
        img: 'https://minenergy.uz/uploads/5fe59dc7-42e6-a73d-947a-e4c1de81c9a0_news_.jpg',
        link: 'https://lex.uz/uz/docs/906220?ONDATE=22.12.2022&ONDATE2=25.11.2010&action=compare',
    },
    {
        title: 'НАЧАЛЬНИКА ГОСУДАРСТВЕННОЙ ИНСПЕКЦИИ ПО НАДЗОРУ В ЭЛЕКТРОЭНЕРГЕТИКЕ «УЗГОСЭНЕРГОНАДЗОР» Об утверждении Правил технической эксплуатации электрических станций и сетей Республики Узбекистан [Зарегистрирован Министерством юстиции Республики Узбекистан 10 сентября 2004 г. Регистрационный № 1405 ]',
        img: 'https://cdn1.img.sputniknews.uz/img/07e6/08/11/27217173_0:35:680:418_1920x0_80_0_0_620f4f7d385b50271d44e928941c56ed.jpg',
        link: 'https://lex.uz/acts/906220',
    },
    {
        title: 'ПРАВИЛА техники безопасности при эксплуатации теплоиспользующих установок и тепловых сетей',
        img: 'https://aniq.uz/photos/news/CuyrWIM2WupfidG.jpeg',
        link: 'https://nrm.uz/contentf?doc=103731_pravila_tehniki_bezopasnosti_pri_ekspluatacii_teploispolzuyushchih_ustanovok_i_teplovyh_setey_(utverjdeny_prikazom_nachalnika_inspekcii_uzgosenergonadzor_ot_05_04_2006_g_n_58_zaregistrirovannym_myu_06_05_2006_g_n_1572)&products=1_vse_zakonodatelstvo_uzbekistana',
    },
];

const Card = () => {
    return (
        <div className='wrapper ' style={{ paddingBottom: '40px' }}>
            <div className='container'>
                <div className='flex justify-center'>
                    <div
                        className='text-[25px] font-bold text-center lg:w-[75%]'
                        style={{ marginTop: '100px' }}
                    >
                        Важные рекомендации по соблюдению техники безопасности
                    </div>
                </div>
                <div
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
                    style={{ marginTop: '30px' }}
                >
                    {data.map((item, ind) => {
                        return (
                            <a
                                href={item.link}
                                target='_blank'
                                className='bg-white myshadow '
                                key={ind + 1}
                            >
                                <div className='overflow-hidden h-[300px]'>
                                    <img
                                        src={item.img}
                                        className='h-full w-full object-cover'
                                        alt=''
                                    />
                                </div>
                                <div className='' style={{ padding: '20px' }}>
                                    {/* <div className='flex gap-3'>
                                        <div className='flex gap-1 items-center'>
                                            <div className='text-[#1eb2a6]'>
                                                <FaUser />
                                            </div>
                                            <div className='font-bold'>
                                                Admin
                                            </div>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <div className='text-[#1eb2a6]'>
                                                <FaRegCalendarAlt />
                                            </div>
                                            <div className='font-bold'>
                                                Jan. 18, 2021
                                            </div>
                                        </div>
                                    </div> */}
                                    <div
                                        className='text-[18px]'
                                        style={{ marginTop: '10px' }}
                                    >
                                        {item.title}
                                    </div>
                                    <div
                                        className='text-[17px] text-[#999999] font-medium'
                                        style={{ marginTop: '10px' }}
                                    >
                                        {item.desc}
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Card;
