import { PieChart } from 'react-minimal-pie-chart'
import Footer from './components/layout/footer'
import DistCard from './components/cards/dist-card'
import { Chrono } from "react-chrono-extra";
import { Fade, Bounce, Slide } from "react-awesome-reveal";

function App() {
    return (
        <div className='h-screen'>
            <div className='-mt-4 min-h-screen bg-[url(/duckbuck7.jpg)] bg-cover bg-center bg-no-repeat pt-24 lg:pt-64'>
                <div className='absolute inset-0 z-20 h-full w-full bg-ducky/60' />

                <section className='relative z-30 mx-auto flex flex-col gap-4 px-4 antialiased lg:mx-20 lg:flex-row-reverse lg:pl-20'>
                    <div className='lg:-ml-24'>
                        <h1 className='font-inter z-20 select-none py-8 text-center text-5xl font-bold leading-none md:text-[5rem] lg:text-start lg:text-[4rem] xl:text-[6rem]'>
                            Sweet{' '}
                            <span className='border-b-8 border-purple-600 bg-gradient-to-r from-purple-300 from-10% to-purple-500 bg-clip-text leading-[1.5] text-transparent underline underline-offset-4'>
                                Meme
                            </span>{' '}
                            with<br className='md:hidden' /> DeFi Utility
                        </h1>
                        <p className='lg:mx-w-none mx-auto -mt-4 max-w-xl text-center text-xl md:font-semibold lg:mx-0 lg:text-start'>
                            Start your meme journey with the Ducky Duck. A
                            project team that is dedicated to the community and
                            the growth of the project. DuckBuck is a Crypto
                            Memecoin utility token attributed to duckiness of
                            Ducky Duck with automated buy-bat & burns leading to
                            everlasting price appreciation of the $DUCKY.
                        </p>

                        <button className='mx-auto mt-4 flex w-fit cursor-pointer items-center gap-1 rounded-full border-4 border-purple-800 bg-ducky p-4 px-12 font-semibold uppercase hover:bg-ducky/60 lg:mx-0'>
                            Buy $DBUCK
                        </button>
                    </div>

                    <Bounce>
                        <div className='h-fit overflow-clip lg:-mt-24'>
                            <img
                                src='/duckbuck-nobg.png'
                                alt='logo'
                                width={512}
                                height={512}
                                className='mx-auto w-[1000px]'
                            />{' '}
                        </div>
                    </Bounce>
                </section>
            </div>

            <div className='block pt-32 md:pt-52'>
                <About />
                <Tokenomics />
                <Roadmap />
                <AirdropMech />

                <div className='flex flex-col items-center justify-center mt-32'>
                    <button className='mx-auto mt-4 flex w-fit cursor-pointer items-center gap-1 rounded-full border-4 border-purple-800 bg-ducky p-4 px-24 font-semibold uppercase hover:bg-ducky/60 lg:mx-0'>
                        Buy $DBUCK
                    </button>


                    <Bounce>
                        <div className='block mt-8'>
                            <img
                                src='/duckbuck2.jpg'
                                alt='logo'
                                width={512}
                                height={512}
                                className='w-[500px] rounded-full bg-ducky/50 shadow-lg'
                            />
                        </div>
                    </Bounce>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default App

// About us
const About = () => {
    return (
        <div className='flex flex-col md:flex-row items-start justify-center px-4 md:gap-20 md:px-56'>
            <div className='flex w-full md:w-fit flex-col items-center'>
                <div className='flex w-full items-center justify-center mx-auto'>
                    <img
                        src='/duckbuck2.jpg'
                        alt='logo'
                        width={512}
                        height={512}
                        className='mx-auto -mt-20 w-[250px] md:w-[500px] rounded-full bg-ducky/50 shadow-lg'
                    />
                </div>
            </div>

            <div className='flex flex-col'>
                <div>
                    <h1 className='font-ducky text-5xl text-center mt-8 md:mt-0 md:text-start font-bold md:text-7xl lg:text-8xl'>
                        About
                    </h1>
                    <div className='h-1 w-[60%] hidden md:block mx-auto md:mx-0 bg-purple-500' />
                </div>
                <p className='mt-6 max-w-xl text-center md:text-start text-xl  lg:text-2xl'>
                    DuckBuck is a Crypto Memecoin utility token attributed to
                    duckiness of Ducky Duck with automated buy-bat & burns
                    leading to everlasting price appreciation of the $DUCKY.
                </p>
                <button className='mx-auto mt-12 flex w-fit cursor-pointer items-center gap-1 rounded-full border-4 border-purple-800 bg-ducky p-4 px-12 uppercase hover:bg-ducky/60 lg:mx-0'>
                    Buy $DBUCK
                </button>
            </div>
        </div>
    )
}

// Tokenomics
const Tokenomics = () => {
    return (
        <div className='mt-32 md:mt-52 flex flex-col items-center p-4 justify-center md:gap-8 bg-ducky/50 py-32 md:px-56'>
            <Fade direction='down'>
                <h1 className='font-ducky text-5xl font-bold md:text-7xl lg:text-8xl'>
                    Tokenomics
                </h1>
            </Fade>

            <div className='mt-12 flex flex-col-reverse md:flex-row items-center gap-12'>
                <div>
                    <h1 className='font-ducky text-4xl text-center mx-auto md:mx-0 md:text-start font-bold md:text-4xl lg:text-5xl'>
                        Total Supply{' '}<br className='md:hidden' />
                        <span className='border-b-8 border-purple-600 bg-gradient-to-r from-purple-300 from-10% to-purple-500 bg-clip-text md:leading-[1.5] text-transparent underline underline-offset-4'>
                            {' '}
                            $DBUCK 1 Billion
                        </span>
                    </h1>
                    <div className='mt-16 grid border-purple-600 grid-cols-1 gap-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <DistCard
                                title='Community and Rewards'
                                body='40%'
                                extra='Allocated for community rewards, staking, and incentives'
                                color='#6d8bde'
                            />
                            <div className='flex flex-col gap-4'>
                                <DistCard
                                    title='Development and Marketing'
                                    body='30%'
                                    extra='Used for development, marketing and partnerships'
                                    color='#8188dd'
                                />
                                <DistCard
                                    title='Founders and Team'
                                    body='15%'
                                    extra='With vesting period to ensure long-term commitment'
                                    color='#9586dc'
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <DistCard
                                title='Liquidity'
                                body='10%'
                                extra='Locked in liquidity pool to ensure stability and security'
                                color='#a983da'
                            />
                            <DistCard
                                title='Charity and Donations'
                                body='5%'
                                extra='Designated for charitable causes (wildlife conservation)'
                                color='#bd80d9'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-8 md:mt-16'>
                    <div className='flex w-fit flex-col items-center text-white'>
                        <PieChart
                            lineWidth={20}
                            paddingAngle={18}
                            rounded={true}
                            labelPosition={112}
                            className='text-white'
                            data={[
                                {
                                    title: 'Community and Rewards',
                                    value: 40,
                                    color: '#6d8bde'
                                },
                                {
                                    title: 'Development and Marketing',
                                    value: 30,
                                    color: '#8188dd'
                                },
                                {
                                    title: 'Founders and Team',
                                    value: 15,
                                    color: '#9586dc'
                                },
                                {
                                    title: 'Liquidity',
                                    value: 10,
                                    color: '#a983da'
                                },
                                { title: 'Charity', value: 5, color: '#bd80d9' }
                            ]}
                            animate={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

// Roadmap
const Roadmap = () => {
    const items = [{
        title: "Phase1",
        cardTitle: "Launch and Initial Growth",
        cardDetailedText: "Token launch and initial distribution.Establish social media presence and community channels.Launch the DuckBuck website and publish whitepaper.Initial coin listing on decentralized exchanges",

    },
    {
        title: "Phase2",
        cardTitle: "Expansion and Utility Developement",
        cardDetailedText: "Introduce Duck Buck NFTs and marketplace.Partner with meme creators and influencers.Launch first community-driven charitable event.",

    },
    {
        title: "Phase3",
        cardTitle: "Community and Ecosystem Builidng",
        cardDetailedText: "Develop and launch the DuckBuck mobile app. Integrate gamification features into the platform. Secure additional exchange listings and trading pairs. Expand charitable partnerships and initiatives.",

    }
    ];

    return (

        <div className='pt-24 md:pt-0 md:mt-52 flex flex-col items-center justify-center gap-8 md:px-56'>

            <div>
                <Fade direction='down'>
                    <h1 className='font-ducky text-5xl text-center md:text-start font-bold md:text-7xl lg:text-8xl'>
                        Ducky's Roadmap
                    </h1>
                </Fade>
            </div>

            <img
                src='/duckbuck5.jpg'
                alt='logo'
                width={512}
                height={512}
                className='-ml-32 z-30 md:ml-0 -mb-12 md:-mb-8 w-[200px] md:w-[300px] rounded-full bg-ducky/50 shadow-lg'
            />

            <div className='md:mx-auto w-[400px] h-fit md:w-[800px]'>
                <Chrono
                    items={items}
                    mode={'VERTICAL_ALTERNATING'}
                    scrollable={false}
                    useReadMore={false}
                    hideControls={true}
                    theme={{
                        primary: '#8D33EA',
                        secondary: 'black',
                        cardBgColor: '#8D33EA',
                        titleColor: 'white',
                        titleColorActive: 'white',

                    }}
                />
            </div>
        </div>
    )
}

// Airdrop Mech
const AirdropMech = () => {
    return (

        <div className='mt-24 md:mt-52 flex flex-col items-center justify-center gap-8 bg-ducky/50 py-32 md:px-56'>
            <div>
                <Fade direction='down' duration={500}>
                    <h1 className='font-ducky text-5xl text-center md:text-start font-bold md:text-7xl lg:text-8xl'>
                        AirDrop Mechanism
                    </h1>
                </Fade>
            </div>

            <div className='pt-8'>

                <Slide direction='right' duration={500}>
                    <div className='flex flex-col md:flex-row items-center gap-8'>
                        <div className='text-8xl border-2 border-dashed border-purple-600 text-purple-500 flex items-center justify-center  h-32 w-32 p-4 rounded-full font-semibold'>1 </div>
                        <div className='border-y px-8 py-12 border-purple-900'>
                            <h2 className='font-ducky text-lg font-bold md:text-xl lg:text-2xl text-center md:text-start'>Eligibility</h2>
                            <p className='mt-3 max-w-xl text-center md:text-start '>

                                Users must hold a minimum amount of a major cryptocurrency (e.g., ETH, BTC, BNB) to be eligible.
                                Follow DuckBuck on social media platforms (Twitter, Telegram, Discord).
                                Complete a simple task such as retweeting a specific post or joining the community chat.
                            </p>

                        </div>
                    </div>
                </Slide>

                <Slide direction='right' duration={500}>
                    <div className='flex flex-col pt-8 md:pt-0 md:flex-row items-center gap-8'>
                        <div className='text-8xl bg-purple-500/20 text-purple-500 flex items-center justify-center  h-32 w-32 p-4 rounded-full font-semibold'>2</div>
                        <div className='border-b px-8 py-12 border-purple-900'>
                            <h2 className='font-ducky text-lg font-bold md:text-xl lg:text-2xl text-center md:text-start'>Registration</h2>
                            <p className='mt-3 max-w-xl text-center md:text-start'>
                                Users will sign up on the official DuckBuck website with their wallet address and social media handles.
                                Verification of task completion through integration with social media APIs.
                            </p>

                        </div>
                    </div>
                </Slide>


                <Slide direction='left' duration={500}>
                    <div className='flex flex-col md:flex-row items-center pt-8 md:pt-0 gap-8'>
                        <div className='text-8xl border-2 border-dashed border-purple-600 text-purple-500 flex items-center justify-center  h-32 w-32 p-4 rounded-full font-semibold'>3</div>
                        <div className='border-b px-8 py-12 border-purple-900'>
                            <h2 className='font-ducky text-lg font-bold text-center md:text-start md:text-xl lg:text-2xl'>Distribution</h2>
                            <p className='mt-3 max-w-xl text-center md:text-start'>
                                The airdrop will distribute 200,000,000 DBUCK tokens over a period of 3 months.
                                Tokens will be distributed in three phases: 40% in the first month, 35% in the second month, and 25% in the third month.
                                Airdrop amounts will vary based on the user's engagement level and task completion.
                            </p>

                        </div>
                    </div>
                </Slide>


                <Slide direction='right' duration={500}>
                    <div className='flex flex-col md:flex-row pt-8 md:pt-0 items-center gap-8'>
                        <div className='text-8xl bg-purple-500/20 text-purple-500 flex items-center justify-center  h-32 w-32 p-4 rounded-full font-semibold'>4</div>
                        <div className='border-b px-8 py-12 border-purple-900'>
                            <h2 className='font-ducky text-lg font-bold md:text-xl lg:text-2xl text-center md:text-start'>Anti-Sybil Measures</h2>
                            <p className='mt-3 max-w-xl text-center md:text-start'>
                                Multi-account prevention through KYC (optional) or advanced algorithms to detect and block fake accounts.
                                Regular audits and community feedback to ensure fair distribution.
                            </p>

                        </div>
                    </div>
                </Slide>


                <Slide direction='left' duration={500}>
                    <div className='flex flex-col md:flex-row items-center pt-8 md:pt-0 gap-8'>
                        <div className='text-8xl border-2 border-dashed border-purple-600 text-purple-500 flex items-center justify-center  h-32 w-32 p-4 rounded-full font-semibold'>5</div>
                        <div className='border-b px-8 py-12 border-purple-900'>
                            <h2 className='font-ducky text-lg font-bold md:text-xl lg:text-2xl text-center md:text-start'>Bonus Airdrops</h2>
                            <p className='mt-3 max-w-xl text-center md:text-start'>
                                Additional tokens for users who refer others to the DuckBuck community.
                                Special bonuses for long-term holders and active participants in governance.
                            </p>

                        </div>
                    </div>
                </Slide>

            </div>
        </div>
    )
}
