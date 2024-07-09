import { PieChart } from 'react-minimal-pie-chart'
import Footer from './components/layout/footer'
import DistCard from './components/cards/dist-card'
import { Chrono } from 'react-chrono-extra'
import { Fade, Bounce, Rotate } from 'react-awesome-reveal'
import { Files } from 'lucide-react'
import { toast } from 'sonner'
import PlugConnect from './lib/connect-plug'


function App() {

    const handleCopy = () => {
        if (!navigator.clipboard) {
            toast.error('Clipboard not supported Canister ID: phu3j-cyaaa-aaaam-acr3q-cai')
            return
        }

        navigator.clipboard.writeText('phu3j-cyaaa-aaaam-acr3q-cai')

        toast.success('Copied to clipboard')

    }

    return (
        <div className='h-screen'>
            <div className='-mt-4 min-h-screen bg-[url(/duckbuck7.jpg)] bg-cover bg-center bg-no-repeat pt-24 md:pt-52 lg:pt-64'>
                <div className='absolute inset-0 z-20 h-full w-full bg-ducky/60' />

                <section className='relative z-30 mx-auto flex flex-col gap-4 px-4 antialiased lg:mx-20 lg:flex-row-reverse lg:pl-20'>
                    <div className='lg:-ml-24 xl:-mt-24 2xl:mt-0'>
                        <h1 className='font-iso z-20 select-none py-8 text-center text-[3rem] leading-none md:text-[5rem] lg:text-start lg:text-[4rem] xl:text-[6rem]'>
                            Sweet{' '}
                            <span className='border-b-8 border-purple-600 bg-gradient-to-r from-purple-300 from-10% to-purple-500 bg-clip-text leading-[1.5] text-transparent underline underline-offset-4'>
                                Meme
                            </span>{' '}
                            with
                            <br className='md:hidden' /> DeFi Utility
                        </h1>
                        <p className='lg:mx-w-none mx-auto -mt-4 max-w-xl text-center text-xl md:font-semibold lg:mx-0 lg:text-start'>Hello from $DUCK, the quackiest meme coin in the crypto pond! Inspired by the irreverent and money-loving Howard the Duck, DUCKBUCK is here to bring a splash of fun and a wave of wealth to the crypto community.</p>


                        <div className='flex flex-col gap-2 md:flex-row'>
                            <a
                                target='_blank'
                                href={`https://app.icpswap.com/swap?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=phu3j-cyaaa-aaaam-acr3q-cai`}
                                className='mx-auto text-white mt-4 flex w-fit cursor-pointer items-center gap-1 rounded-full border-4 border-purple-800 bg-ducky p-4 px-12 uppercase hover:bg-ducky/60 lg:mx-0 font-iso text-2xl'
                            >
                                ICP Swap
                            </a>
                            <button
                                onClick={handleCopy}
                                className='mx-auto mt-4 flex text-purple-500 w-fit cursor-pointer items-center gap-1 rounded-full border-4 border-purple-800 bg-ducky p-4 px-12 uppercase hover:bg-ducky/60 lg:mx-0 font-iso text-2xl'
                            >
                                <Files /> Canister ID
                            </button>
                        </div>
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

                <div className='mt-8 flex flex-col items-center justify-center'>

                    <div className='mt-8'>
                        <a
                            target='_blank'
                            href={`https://rewards.taskon.xyz/campaign/detail/402475150`}
                            className='mx-auto mt-4 flex  w-fit cursor-pointer items-center gap-1 rounded-full border-4 border-purple-800 bg-ducky p-4 px-12 uppercase hover:bg-ducky/60 lg:mx-0 font-iso text-2xl'
                        >
                            Drop Me $DUCK now!
                        </a>
                    </div>

                    <Bounce>
                        <div className='mt-8 block'>
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
        <div className='flex flex-col items-start justify-center px-4 lg:flex-row lg:gap-20 lg:px-56'>
            <div className='flex w-full flex-col items-center lg:w-fit'>
                <div className='mx-auto flex w-full items-center justify-center'>
                    <img
                        src='/duckbuck2.jpg'
                        alt='logo'
                        width={512}
                        height={512}
                        className='mx-auto -mt-20 w-[250px] rounded-full bg-ducky/50 shadow-lg lg:w-[500px]'
                    />
                </div>
            </div>

            <div className='flex flex-col mx-auto'>
                <div>
                    <h1 className='mt-8 font-iso text-center font-ducky text-5xl lg:mt-0 lg:text-start lg:text-8xl'>
                        DUCKY ?
                    </h1>
                    <div className='mx-auto hidden h-1 w-[60%] bg-purple-500 lg:mx-0 lg:block' />
                </div>
                <p className='mt-6 max-w-xl text-center text-xl lg:text-start lg:text-2xl'>
                    Duck Buck's vision is to create a vibrant, engaged community around a cryptocurrency that is both fun and rewarding. Inspired by <b>Howard the Duck</b>, who mastered the rare martial art <b>Quak Fu</b> and could take out a gang of four adult men or grab a hurled knife or spinning nunchaku out of mid-air, we aim to bring that same level of mastery and excitement to the world of crypto.                </p>

                <div className='flex flex-col gap-3 mx-auto w-fit lg:mx-0'>
                    <button
                        onClick={PlugConnect}
                        className='mx-auto space-x-1 mt-4 flex w-fit cursor-pointer items-center gap-1 rounded-full border-4 border-purple-800 bg-ducky p-4 px-12 font-semibold uppercase hover:bg-ducky/60 lg:mx-0 font-iso text-2xl'
                    >
                        <img
                            src='/plugwallet.webp'
                            alt='Plug Wallet'
                            width={50}
                            height={50}
                            className='rounded-full'
                        />
                        <span>Connect Plug</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

// Tokenomics
const Tokenomics = () => {
    return (
        <div className='mt-32 flex flex-col items-center justify-center bg-ducky/50 p-4 py-32 lg:mt-52 lg:gap-8 lg:px-56'>
            <Fade direction='down'>
                <h1 className='font-iso text-5xl md:text-7xl lg:text-8xl'>
                    Duckynomics
                </h1>
            </Fade>

            <div className='mt-12 flex flex-col-reverse items-center gap-12 lg:flex-row'>
                <div>
                    <h1 className='mx-auto text-center font-ducky text-4xl font-bold lg:mx-0 lg:text-start md:text-5xl'>
                        Total Supply <br className='md:hidden' />
                        <span className='border-b-8 border-purple-600 bg-gradient-to-r from-purple-300 from-10% to-purple-500 bg-clip-text text-transparent underline underline-offset-4 md:leading-[1.5]'>
                            {' '}
                            <span className='font-iso'>$DUCK</span> 1 Billion
                        </span>
                    </h1>
                    <div className='mt-16 grid grid-cols-1 gap-4 border-purple-600'>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
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
                    <Rotate>
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
                    </Rotate>
                </div>
            </div>
        </div>
    )
}

// Roadmap
const Roadmap = () => {
    const items = [
        {
            title: 'Phase1',
            cardTitle: 'Launch and Initial Growth',
            cardDetailedText:
                'Token launch and initial distribution.Establish social media presence and community channels.Launch the DuckBuck website and publish whitepaper.Initial coin listing on decentralized exchanges'
        },
        {
            title: 'Phase2',
            cardTitle: 'Expansion and Utility Developement',
            cardDetailedText:
                'Introduce Duck Buck NFTs and marketplace.Partner with meme creators and influencers.Launch first community-driven charitable event.'
        },
        {
            title: 'Phase3',
            cardTitle: 'Community and Ecosystem Builidng',
            cardDetailedText:
                'Develop and launch the DuckBuck mobile app. Integrate gamification features into the platform. Secure additional exchange listings and trading pairs. Expand charitable partnerships and initiatives.'
        }
    ]

    return (
        <div className='flex flex-col items-center justify-center gap-8 pt-24 lg:mt-52 lg:px-56 lg:pt-0'>
            <div>
                <Fade direction='down'>
                    <h1 className='font-iso text-center font-ducky text-5xl md:text-start md:text-7xl lg:text-8xl'>
                        Ducky's Roadmap
                    </h1>
                </Fade>
            </div>

            <img
                src='/duckbuck5.jpg'
                alt='logo'
                width={512}
                height={512}
                className='z-30 -mb-12 -ml-32 w-[200px] rounded-full bg-ducky/50 shadow-lg md:-mb-8 md:-ml-[25rem] lg:ml-0 md:w-[300px]'
            />

            <div className='h-fit w-[400px] md:mx-auto md:w-[800px]'>
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
                        titleColorActive: 'white'
                    }}
                />
            </div>
        </div>
    )
}

// Airdrop Mech
const AirdropMech = () => {
    return (
        <div id='airdrop' className='mt-24 flex flex-col items-center justify-center gap-8 bg-ducky/50 py-32 md:mt-52 md:px-56'>
            <div>
                <Fade direction='down' duration={500}>
                    <h1 className='font-iso text-center font-ducky text-5xl md:text-start md:text-7xl lg:text-8xl'>
                        AirDrop Some {" "}
                        <span className='border-b-8 border-purple-600 bg-gradient-to-r from-purple-300 from-10% to-purple-500 bg-clip-text text-transparent underline underline-offset-4 md:leading-[1.5]'>
                            $DUCK
                        </span>
                    </h1>
                </Fade>
            </div>

            <div className='pt-8'>
                <Fade direction='up' duration={500}>
                    <div className='flex flex-col items-center gap-8 md:flex-row'>
                        <div className='flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-purple-600 p-4 text-8xl font-semibold text-purple-500'>
                            1{' '}
                        </div>
                        <div className='border-y border-purple-900 px-8 py-12'>
                            <h2 className='text-center font-ducky text-lg font-bold md:text-start md:text-xl lg:text-2xl'>
                                Eligibility
                            </h2>
                            <p className='mt-3 max-w-xl text-center md:text-start'>
                                Users must hold a minimum amount of a major
                                cryptocurrency (e.g., ETH, BTC, BNB) to be
                                eligible. Follow DuckBuck on social media
                                platforms (Twitter, Telegram, Discord). Complete
                                a simple task such as retweeting a specific post
                                or joining the community chat.
                            </p>
                        </div>
                    </div>
                </Fade>

                <Fade direction='up' duration={500}>
                    <div className='flex flex-col items-center gap-8 pt-8 md:flex-row md:pt-0'>
                        <div className='flex h-32 w-32 items-center justify-center rounded-full bg-purple-500/20 p-4 text-8xl font-semibold text-purple-500'>
                            2
                        </div>
                        <div className='border-b border-purple-900 px-8 py-12'>
                            <h2 className='text-center font-ducky text-lg font-bold md:text-start md:text-xl lg:text-2xl'>
                                Registration
                            </h2>
                            <p className='mt-3 max-w-xl text-center md:text-start'>
                                Users will sign up on the official DuckBuck
                                website with their wallet address and social
                                media handles. Verification of task completion
                                through integration with social media APIs.
                            </p>
                        </div>
                    </div>
                </Fade>

                <Fade direction='up' duration={500}>
                    <div className='flex flex-col items-center gap-8 pt-8 md:flex-row md:pt-0'>
                        <div className='flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-purple-600 p-4 text-8xl font-semibold text-purple-500'>
                            3
                        </div>
                        <div className='border-b border-purple-900 px-8 py-12'>
                            <h2 className='text-center font-ducky text-lg font-bold md:text-start md:text-xl lg:text-2xl'>
                                Distribution
                            </h2>
                            <p className='mt-3 max-w-xl text-center md:text-start'>
                                The airdrop will distribute 200,000,000 $DUCK
                                tokens over a period of 3 months. Tokens will be
                                distributed in three phases: 40% in the first
                                month, 35% in the second month, and 25% in the
                                third month. Airdrop amounts will vary based on
                                the user's engagement level and task completion.
                            </p>
                        </div>
                    </div>
                </Fade>

                <Fade direction='up' duration={500}>
                    <div className='flex flex-col items-center gap-8 pt-8 md:flex-row md:pt-0'>
                        <div className='flex h-32 w-32 items-center justify-center rounded-full bg-purple-500/20 p-4 text-8xl font-semibold text-purple-500'>
                            4
                        </div>
                        <div className='border-b border-purple-900 px-8 py-12'>
                            <h2 className='text-center font-ducky text-lg font-bold md:text-start md:text-xl lg:text-2xl'>
                                Anti-Sybil Measures
                            </h2>
                            <p className='mt-3 max-w-xl text-center md:text-start'>
                                Multi-account prevention through KYC (optional)
                                or advanced algorithms to detect and block fake
                                accounts. Regular audits and community feedback
                                to ensure fair distribution.
                            </p>
                        </div>
                    </div>
                </Fade>

                <Fade direction='up' duration={500}>
                    <div className='flex flex-col items-center gap-8 pt-8 md:flex-row md:pt-0'>
                        <div className='flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-purple-600 p-4 text-8xl font-semibold text-purple-500'>
                            5
                        </div>
                        <div className='border-b border-purple-900 px-8 py-12'>
                            <h2 className='text-center font-ducky text-lg font-bold md:text-start md:text-xl lg:text-2xl'>
                                Bonus Airdrops
                            </h2>
                            <p className='mt-3 max-w-xl text-center md:text-start'>
                                Additional tokens for users who refer others to
                                the DuckBuck community. Special bonuses for
                                long-term holders and active participants in
                                governance.
                            </p>
                        </div>
                    </div>
                </Fade>


            </div>

            <div className='mt-8'>
                <a
                    target='_blank'
                    href={`https://rewards.taskon.xyz/campaign/detail/402475150`}
                    className='mx-auto mt-4 flex  w-fit cursor-pointer items-center gap-1 rounded-full border-4 border-purple-800 bg-ducky p-4 px-12 uppercase hover:bg-ducky/60 lg:mx-0 font-iso text-2xl'
                >
                    Drop Me $DUCK now!
                </a>
            </div>
        </div>
    )
}
