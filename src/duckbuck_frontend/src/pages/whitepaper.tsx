import Footer from '../components/layout/footer'
import MarkdownRenderer from '../components/markdown'

export default function Page() {
    return (
        <>
            <section className='bg-ducky min-h-screen md:py-32 lg:px-96'>
                <div className='mx-4 bg-purple-950 rounded border w-fit mx-auto lg:px-28 border-slate-800 bg-ducky/30 p-4 '>
                    <MarkdownRenderer content={markdown} />
                </div>
            </section>
            <Footer className='bg-ducky' />
        </>
    )
}

const markdown = `
# DUCKBUCK ($DUCK)

## Introduction

Welcome to DUCKBUCK, the quackiest meme coin in the crypto pond! Inspired by the irreverent and money-loving Howard the Duck, DUCKBUCK is here to bring a splash of fun and a wave of wealth to the crypto community. Our mission? To create a financial revolution that’s as entertaining as a Saturday morning cartoon and as lucrative as a golden egg-laying duck!

## Detailed Description

Duck Buck's vision is to create a vibrant, engaged community around a cryptocurrency that is both fun and rewarding. Our mission is to redefine the potential of meme coins by integrating unique features such as NFT collectibles, interactive games, and charitable initiatives.

## Features

- **Community-Driven**: Duck Buck prioritizes transparency, inclusivity, and active engagement with its community.
- **Charitable Initiatives**: A portion of Duck Buck’s proceeds will be dedicated to wildlife conservation efforts.
- **NFT Integration**: Unique Duck Buck NFTs will provide collectors with exclusive digital assets.
- **Gamification**: Interactive games and challenges will keep the community entertained and involved.

## Airdrop Mechanism

The DuckBuck airdrop aims to reward early adopters and active community members, creating a strong foundation of loyal supporters. Here’s how it will work:

### Eligibility
- Users must hold a minimum amount of a major cryptocurrency (e.g., ETH, BTC, BNB) to be eligible.
- Follow DuckBuck on social media platforms (Twitter, Telegram, Discord).
- Complete a simple task such as retweeting a specific post or joining the community chat.

### Registration
- Users will sign up on the official DuckBuck website with their wallet address and social media handles.
- Verification of task completion through integration with social media APIs.

### Distribution
- The airdrop will distribute 200,000,000 $DUCK tokens over a period of 3 months.
- Tokens will be distributed in three phases: 40% in the first month, 35% in the second month, and 25% in the third month.
- Airdrop amounts will vary based on the user's engagement level and task completion.

### Anti-Sybil Measures
- Multi-account prevention through KYC (optional) or advanced algorithms to detect and block fake accounts.
- Regular audits and community feedback to ensure fair distribution.

### Bonus Airdrops
- Additional tokens for users who refer others to the DuckBuck community.
- Special bonuses for long-term holders and active participants in governance.

## Roadmap

### Phase 1: Launch and Initial Growth
- **Q1 2024**: Token launch and initial distribution.
- **Q1 2024**: Establish social media presence and community channels.
- **Q2 2024**: Launch the DuckBuck website and publish whitepaper.
- **Q2 2024**: Initial coin listing on decentralized exchanges.

### Phase 2: Expansion and Utility Development
- **Q3 2024**: Introduce Duck Buck NFTs and marketplace.
- **Q3 2024**: Partner with meme creators and influencers.
- **Q4 2024**: Launch first community-driven charitable event.

### Phase 3: Community and Ecosystem Building
- **Q1 2025**: Develop and launch the DuckBuck mobile app.
- **Q2 2025**: Integrate gamification features into the platform.
- **Q2 2025**: Secure additional exchange listings and trading pairs.
- **Q3 2025**: Expand charitable partnerships and initiatives.

## Tokenomics

- **Token Name**: DuckBuck
- **Ticker**: DBUCK
- **Total Supply**: 1,000,000,000 $DUCK tokens will be minted.

### Distribution
- **Community and Rewards (40%)**: Allocated for community rewards, staking, and incentives.
- **Development and Marketing (30%)**: Used for development, marketing, and partnerships.
- **Founders and Team (15%)**: Reserved for the team, with a vesting period to ensure commitment.
- **Liquidity (10%)**: Locked in liquidity pools.
- **Charity (5%)**: Dedicated to charitable causes, focusing on wildlife conservation.

## Key Mechanics

- **Transaction Fees**: A 2% transaction fee will be applied, with 1% redistributed to holders and 1% burned to create deflationary pressure.
- **Staking Rewards**: Holders can stake their $DUCK tokens to earn additional rewards and participate in governance decisions.

## Conclusion

Duck Buck is more than just a meme coin; it is a movement towards a more engaging and fun cryptocurrency landscape. By combining the playful nature of internet culture with robust blockchain technology, Duck Buck aims to build a strong community and make a meaningful impact. Join us on this quacking adventure and be part of the Duck Buck revolution!
`
