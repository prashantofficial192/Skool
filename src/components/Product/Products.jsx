import React from 'react'
import "./Products.css"
import "./responsive.css"
import Card from './Card'



const Products = () => {
    const cardsData = [
        {
            id: 1,
            mainImage: "https://i.ibb.co/vhcMyTx/10032.jpg",
            secondaryImage: "https://i.ibb.co/mqMz70q/10003.jpg",
            title: 'ANIME SHREDS 英雄',
            description: "' Lock In Your Membership At A Discount ⛩️.Helping women learn the skill of day trading in a safe and'",
            type: 'Private',
            members: '9k Members',
            price: '$22 /month',
        },
        {
            id: 2,
            mainImage: "https://i.ibb.co/zNCs3cW/10033.jpg",
            secondaryImage: "https://i.ibb.co/6mbCxLs/10004.jpg",
            title: 'Fayefilms Academy',
            description: '❤️ A community for anyone that values productivity, academics, mental health and personal growth~',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 3,
            mainImage: "https://i.ibb.co/m9WycBm/10034.jpg",
            secondaryImage: "https://i.ibb.co/NVLdmw0/10005.jpg",
            title: 'Adonis Gang',
            description: 'Men need brotherhood now more than ever. Adonis Gang is Hamza community for masculine men on self improvement.',
            type: 'Private',
            members: '131.1k Members',
            price: '$1 /month',
        },
        {
            id: 4,
            mainImage: "https://i.ibb.co/gvsKRyh/10035.jpg",
            secondaryImage: "https://i.ibb.co/5WGKK87/10006.jpg",
            title: 'Digital Growth Community',
            description: 'Welcome to Digital Growth Community! Our Mission: To Help You Build a Daily Pay Customer Base Digitally!',
            type: 'Private',
            members: '20.1k Members',
            price: 'Paid',
        },
        {
            id: 5,
            mainImage: "https://i.ibb.co/9HdMLCD/10036.jpg",
            secondaryImage: "https://i.ibb.co/h7cZSQ8/10007.jpg",
            title: 'Club 1%',
            description: 'Convertite en un trader profesional y logra gestionar múltiples 6 cifras mientras trabajas hábitos + técnico y operas en vivo',
            type: 'Private',
            members: '475k Members',
            price: '$50 /month',
        },
        {
            id: 6,
            mainImage: "https://i.ibb.co/3rR8WJd/10037.jpg",
            secondaryImage: "https://i.ibb.co/MstXNL7/10008.jpg",
            title: 'Expert Coach Program',
            description: 'Become a fully certified Expert Coach. Level up your coaching skills so you can transform your client results.',
            type: 'Private',
            members: '16.3k Members',
            price: 'Free',
        },
        {
            id: 7,
            mainImage: "https://i.ibb.co/52F5nXF/10039.jpg",
            secondaryImage: "https://i.ibb.co/jvQXcrN/10010.jpg",
            title: 'Real Men Real Style Community',
            description: 'Discover the foundations of timeless style, classic grooming, and how to be a better man. Members get access to professional',
            type: 'Private',
            members: '5k Members',
            price: 'Free',
        },
        {
            id: 8,
            mainImage: "https://i.ibb.co/gdW51nG/10038.jpg",
            secondaryImage: "https://i.ibb.co/74MVBws/10009.jpg",
            title: 'High Vibe Tribe',
            description: 'a community for those dedicated to raising their vibration, healing, letting go of limitations and creating freedom in all',
            type: 'Private',
            members: '27k Members',
            price: 'Free',
        },
        {
            id: 9,
            mainImage: "https://i.ibb.co/KspMzh2/10040.jpg",
            secondaryImage: "https://i.ibb.co/BjnTP5C/10011.jpg",
            title: 'The Digital Wealth Academy',
            description: 'Welcome to the Digital Wealth Academy Online community. Here you will learn how to make money online with the Master',
            type: 'Private',
            members: '45k Members',
            price: 'Paid',
        },
        {
            id: 10,
            mainImage: "https://i.ibb.co/9Nch2p9/10041.jpg",
            secondaryImage: "https://i.ibb.co/x86JR6H/10012.jpg",
            title: 'Brotherhood Of Scent',
            description: '#1 Fragrance Community 🏆 Our mission is to help YOU leverage the power of scent to become the man you know yourself to',
            type: 'Private',
            members: '1.4k Members',
            price: 'Free',
        },
        {
            id: 11,
            mainImage: "https://i.ibb.co/ZH69DDj/10042.jpg",
            secondaryImage: "https://i.ibb.co/2kPHqC6/10013.jpg",
            title: 'THE PROJECT.',
            description: 'THE #1 CLOTHING BRAND COMMUNITY IN THE WORLD!THE #1 CLOTHING BRAND COMMUNITY IN THE WORLD!',
            type: 'Private',
            members: '1.2k Members',
            price: '$75 /month',
        },
        {
            id: 12,
            mainImage: "https://i.ibb.co/0FJvxsF/10043.jpg",
            secondaryImage: "https://i.ibb.co/99WsPjB/10014.jpg",
            title: 'RROC TRAINING',
            description: 'Rank up by engaging in the community! The more engagement, the higher you go! The more engagement, the higher you go!',
            type: 'Private',
            members: '4.5k Members',
            price: '$1 / month',
        },
        {
            id: 13,
            mainImage: "https://i.ibb.co/1zMj1jp/10046.jpg",
            secondaryImage: "https://i.ibb.co/k0JDFDk/10017.jpg",
            title: 'Elite Sales University',
            description: 'ANDY ELLIOTT’S PRIVATE ELITE SALES UNIVERSITY #1 GROUP FOR PERSONAL DEVELOPMENT AND SALES',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 14,
            mainImage: "https://i.ibb.co/hBZbDwj/10047.jpg",
            secondaryImage: "https://i.ibb.co/xDP6tRx/10018.jpg",
            title: 'Prosperity School',
            description: 'Become a profitable trader, build a bullet proof mindset, build your edge, meet new friends, rank up & unlock exclusive',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 15,
            mainImage: "https://i.ibb.co/HhJRLzJ/10044.jpg",
            secondaryImage: "https://i.ibb.co/L03fWzv/10015.jpg",
            title: 'Ultimate Branding Course',
            description: 'Welcome to the The Ultimate Branding Course & Community! Learn to build a powerful brand on social media while',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 16,
            mainImage: "https://i.ibb.co/BgMC5M6/10045.jpg",
            secondaryImage: "https://i.ibb.co/XC4CMpq/10016.jpg",
            title: 'Elite Sales Alliance',
            description: 'Elite Sales Training with Andy Elliott. #1 for Sales & Personal Development. Unlock hours of valuable content & networking',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 17,
            mainImage: "https://i.ibb.co/khDj2RW/10049.jpg",
            secondaryImage: "https://i.ibb.co/ykwmHfw/10020.jpg",
            title: 'ETS FREE',
            description: 'END YOUR STRUGGLE and thrive Mentally, Psychically, Financially and More with expert resources for success.',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 18,
            mainImage: "https://i.ibb.co/SrQ75Dg/10048.jpg",
            secondaryImage: "https://i.ibb.co/CMpwC61/10019.jpg",
            title: 'Adonis School',
            description: 'Learn the powerful skills you need to build a wholesome, masculine and incredibly satisfying way of life.',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 19,
            mainImage: "https://i.ibb.co/1XDzX1j/10050.jpg",
            secondaryImage: "https://i.ibb.co/9YwByvK/10028.jpg",
            title: 'Called Coach Academy',
            description: 'CCA is a life coaching program designed for Christian women with a passion for using coaching to transform the lives of',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 20,
            mainImage: "https://i.ibb.co/J3bsH89/10051.jpg",
            secondaryImage: "https://i.ibb.co/Jjhk0x8/10021.jpg",
            title: 'THP Jump Trainin',
            description: 'This course will give you all the resources needed to get your first dunk and beyond!',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 21,
            mainImage: "https://i.ibb.co/MpQbNf2/10052.jpg",
            secondaryImage: "https://i.ibb.co/RvpbBSc/10022.jpg",
            title: 'The 4D Copywriting Community',
            description: 'The best place to be to become a full-time freelance copywriter.',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 22,
            mainImage: "https://i.ibb.co/hHJQYfx/10054.jpg",
            secondaryImage: "https://i.ibb.co/z5ZVM7z/10024.jpg",
            title: 'Player Accelerator',
            description: 'Building players up to the pro academy level ⚽️ If you need help getting inside email for support ⬇️',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 23,
            mainImage: "https://i.ibb.co/k5K3sDn/10055.jpg",
            secondaryImage: "https://i.ibb.co/2vvZrtC/10025.jpg",
            title: 'Mark Haughton Manifestation',
            description: 'Abundance & Prosperity coach well versed in the law of attraction along with quantum mechanics to help others',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 24,
            mainImage: "https://i.ibb.co/sqYq5yv/10053.jpg",
            secondaryImage: "https://i.ibb.co/zsYrWsm/10023.jpg",
            title: 'Socializers',
            description: '✅ Learn how to socialize & date girls. ✅ Make friends & start a tribe. ✅ Make money online. Join our movement of socializers.',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 25,
            mainImage: "https://i.ibb.co/stXBJhF/10058.jpg",
            secondaryImage: "https://i.ibb.co/9YwByvK/10028.jpg",
            title: 'Online Business Friends',
            description: 'Building an online business is hard. So we made a free community where you can learn, network, and grow. Note: This is NOT the Online Business Club',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 26,
            mainImage: "https://i.ibb.co/MpD935P/10057.jpg",
            secondaryImage: "https://i.ibb.co/D78WR66/10027.jpg",
            title: 'Creator Accelerator',
            description: 'The path to making $10,000/mo with a Skool community as a Growth Operator. support@growthoperator.com',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 27,
            mainImage: "https://i.ibb.co/BzNNdnk/10059.jpg",
            secondaryImage: "https://i.ibb.co/d5Qydz4/10029.jpg",
            title: 'Unison Producer Growth Hub',
            description: 'The #1 free community for music producers to grow, learn, connect and simplify the process of producing pro-quality music.',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 28,
            mainImage: "https://i.ibb.co/sCgZKF4/10060.jpg",
            secondaryImage: "https://i.ibb.co/gF5k1xt/10030.jpg",
            title: 'Forex For Women VIP Members',
            description: 'The #1 Women’s only Forex Trading Community in the world. Helping women learn the skill of day trading in a safe and',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 29,
            mainImage: "https://i.ibb.co/VVGp6x5/10056.jpg",
            secondaryImage: "https://i.ibb.co/DWvDshv/10026.jpg",
            title: 'The Ghost Family',
            description: 'TGF, where we guide you through a journey to help you monetize your social media and assist you in constructing a',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        },
        {
            id: 30,
            mainImage: "https://i.ibb.co/sqYq5yv/10053.jpg",
            secondaryImage: "https://i.ibb.co/zsYrWsm/10023.jpg",
            title: 'AI Guy Academy',
            description: 'The path to financial freedom with the power of AI. support@aiguyacademy.com',
            type: 'Private',
            members: '23.5k Members',
            price: 'Free',
        }
    ];

    return (
        <div className="product">
            <div className="card-container">
                {cardsData.map((data) => (
                    <Card key={data.id} {...data} />
                ))}
            </div>
        </div>
    );
};
export default Products;




















{/* <main>
                <section className='product-section'>
                    <div className="product">
                        <div className="product-img">
                            <img src={Image1} alt="Product Image" />
                        </div>
                        <div className="product-desc">
                            <div className="product-title">
                                <div className="product-desc-img">
                                    <img src={Image2} alt="Product Description Image" />
                                </div>
                                <div className="product-name">
                                    <h1>ANIME SHREDS 英雄</h1>
                                </div>
                            </div>
                            <div className="product-review">
                                <p>"Lock In Your Membership At A Discount ⛩️"</p>
                            </div>
                            <div className="product-details">
                                <span>Private</span>
                                <span>9k Members</span>
                                <span>$22 /month</span>
                            </div>
                        </div>
                    </div>

                </section>
            </main> */}


