import { ScrollRestoration, useParams } from 'react-router';
import Img1 from '../../assets/images/image_2025-02-09_15-29-28.png';
import Img2 from '../../assets/images/image_2025-02-09_15-29-45.png';
import Img3 from '../../assets/images/image_2025-02-09_15-30-00.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TiHome } from 'react-icons/ti';
import { FaUser } from 'react-icons/fa6';

const menuItems = [
    { icon: <TiHome />, label: 'Home', link: '/' },
    { icon: <FaUser />, label: 'Profile', link: '/profile' },
];

const data = [
    {
        title: 'Oʻzbekiston Respublikasi bojxona organlarida rentgen qurilmalari yordamida aniqlangan BQB holatlari tahlili',
        table: {
            sana: '07.01.2024',
            viloyat: 'Surxandaryo',
            bojxona: 'Ayritom',
            transport: 'Yuk avtotransport vositasi',
            tovar: 'mandarin',
            ashyo: '1400 quti "ESSE CHANGE" nomli sigaret mahsulotlari',
        },
        rengenTasviri: Img1,
        transportRasmi: Img2,
        noqonuniyTovar: Img3,
        aniqlanganHolat:
            '2024-yil 7-yanvar kuni Surxondaryo viloyati bojxona boshqarmasining "Avritom" chegara bojxona bojxona postiga Afg\'oniston davlatidan kirib kelgan yuk avtotransport vositasiga ortilgan tovarlar yuk-kuzatuv hujjatlarida "MANDARIN deb ko\'rsatilgan.KM tasvirlari tahlili natijasida avtotransport vositasining haydovchi kabinasi qismida begona buyumlar borligi yuzasidan shubha paydo boʻlganligi sababli ushbu transport vositasi bojxona ko\'rigidan o\'tkazilgan Natijada yuk- kuzatuv hujjatlarida ko\'rsatilmagan 58 guti "ESSE CHANGE" nomli sigaret mahsulotlari borligi aniqlangan.',
    },
    {
        title: 'Oʻzbekiston Respublikasi bojxona organlarida rentgen qurilmalari yordamida aniqlangan BQB holatlari tahlili',
        table: {
            sana: '07.01.2024',
            viloyat: 'Surxandaryo',
            bojxona: 'Ayritom',
            transport: 'Yuk avtotransport vositasi',
            tovar: 'mandarin',
            ashyo: '1400 quti "ESSE CHANGE" nomli sigaret mahsulotlari',
        },
        rengenTasviri: Img1,
        transportRasmi: Img2,
        noqonuniyTovar: Img3,
        aniqlanganHolat:
            '2024-yil 7-yanvar kuni Surxondaryo viloyati bojxona boshqarmasining "Avritom" chegara bojxona bojxona postiga Afg\'oniston davlatidan kirib kelgan yuk avtotransport vositasiga ortilgan tovarlar yuk-kuzatuv hujjatlarida "MANDARIN deb ko\'rsatilgan.KM tasvirlari tahlili natijasida avtotransport vositasining haydovchi kabinasi qismida begona buyumlar borligi yuzasidan shubha paydo boʻlganligi sababli ushbu transport vositasi bojxona ko\'rigidan o\'tkazilgan Natijada yuk- kuzatuv hujjatlarida ko\'rsatilmagan 58 guti "ESSE CHANGE" nomli sigaret mahsulotlari borligi aniqlangan.',
    },
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} next text-center`}
            style={{
                ...style,
                display: 'flex',
                position: 'absolute',
                background: 'black',
                color: 'black',
                fontSize: '24px',
                cursor: 'pointer',
                border: '1px solid black',
                borderRadius: '50%',
                justifyContent: 'center',
                alignItems: 'start',
                paddingTop: '1px',
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} prev text-center`}
            style={{
                display: 'flex',
                position: 'absolute',
                background: 'black',
                color: 'black',
                fontSize: '24px',
                cursor: 'pointer',
                border: '1px solid black',
                borderRadius: '50%',
                justifyContent: 'center',
                alignItems: 'start',
                paddingTop: '1px',
            }}
            onClick={onClick}
        />
    );
}

const CardId = () => {
    // const [isCollapsed, setIsCollapsed] = useState(false);

    // const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    const { id } = useParams();
    const settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        draggable: false,
        swipe: false,
        arrows: true,
    };
    return (
        <>
            <div className='layout'>
                <div className={`sidebar `}>
                    {/* <button onClick={toggleSidebar} className='toggle-button'>
                        <MdOutlineMenuOpen />
                    </button> */}
                    <div className='menu'>
                        {menuItems.map((item, index) => (
                            <div
                                className={({ isActive }) =>
                                    isActive ? 'active-link' : undefined
                                }
                                key={index}
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                <div className='menu-item'>
                                    {/* <div className='icon'>{item.icon}</div> */}
                                    {/* {!isCollapsed && ( */}
                                    <span className='label'>{item.label}</span>
                                    {/* )} */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='main'>
                    {/* <nav className='navbar' style={{ paddingBlock: '30px' }}>
                        Navbar
                    </nav> */}
                    <main className='content'>
                        <div
                            className='wrapper'
                            style={{ marginBlock: '0px', padding: '0px' }}
                        >
                            <div className='container'>
                                <Slider {...settings} className='slider'>
                                    {data.map((item, ind) => {
                                        return (
                                            <div key={ind + 1}>
                                                <div className='text-[20px]'>
                                                    {item.title}
                                                </div>
                                                <div className='overflow-x-scroll'>
                                                    <table
                                                        className='w-[1000px] lg:w-full'
                                                        style={{
                                                            marginTop: '20px',
                                                        }}
                                                    >
                                                        <thead>
                                                            <tr>
                                                                <th>№</th>
                                                                <th>Sana</th>
                                                                <th>Viloyat</th>
                                                                <th>
                                                                    Bojxona
                                                                    posti
                                                                </th>
                                                                <th>
                                                                    Transport
                                                                    vositasi
                                                                </th>
                                                                <th>
                                                                    Tovar nomi
                                                                </th>
                                                                <th>
                                                                    Ashyolar
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    {ind + 1}
                                                                </td>
                                                                <td>
                                                                    {
                                                                        item
                                                                            .table
                                                                            .sana
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        item
                                                                            .table
                                                                            .viloyat
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        item
                                                                            .table
                                                                            .bojxona
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        item
                                                                            .table
                                                                            .transport
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        item
                                                                            .table
                                                                            .tovar
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        item
                                                                            .table
                                                                            .ashyo
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div
                                                    className='grid grid-cols-12 gap-5'
                                                    style={{
                                                        marginTop: '20px',
                                                    }}
                                                >
                                                    <div className='col-span-12 lg:col-span-8'>
                                                        <div>
                                                            <div className='text-[20px] text-center'>
                                                                Rengin tasviri
                                                            </div>
                                                            <div>
                                                                <img
                                                                    className='w-full'
                                                                    src={
                                                                        item.rengenTasviri
                                                                    }
                                                                    alt=''
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className='flex gap-4'
                                                            style={{
                                                                marginTop:
                                                                    '10px',
                                                            }}
                                                        >
                                                            <div className='w-full'>
                                                                <div className='text-[20px] text-center'>
                                                                    Transport
                                                                    surati
                                                                </div>
                                                                <div>
                                                                    <img
                                                                        className='w-full'
                                                                        src={
                                                                            item.transportRasmi
                                                                        }
                                                                        alt=''
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='w-full'>
                                                                <div className='text-[20px] text-center'>
                                                                    Noqononiy
                                                                    tovar
                                                                </div>
                                                                <div>
                                                                    <img
                                                                        className='w-full'
                                                                        src={
                                                                            item.noqonuniyTovar
                                                                        }
                                                                        alt=''
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-span-12 lg:col-span-4'>
                                                        <div className='text-[24px] text-center font-semibold'>
                                                            Aniqlangan holat
                                                        </div>
                                                        <div className='text-[18px]'>
                                                            {
                                                                item.aniqlanganHolat
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <ScrollRestoration />
        </>
    );
};
export default CardId;
