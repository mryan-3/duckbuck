import Footer from '../components/layout/footer'
import MarkdownRenderer from '../components/markdown'

export default function Page() {
    return (
        <>
            <section className='bg-ducky min-h-screen py-16 md:py-32 lg:px-96'>
                <div className='mx-4 rounded-lg lg:shadow lg:border-4 lg:border-purple-500 w-fit md:mx-auto lg:px-28 p-4 '>
                    <MarkdownRenderer content={markdown} />
                </div>
            </section>
            <Footer className='bg-ducky' />
        </>
    )
}

const markdown = `
# $DUCK

## Introduction

Welcome to DUCKBUCK, the quackiest meme coin in the crypto pond! Inspired by the irreverent and money-loving Howard the Duck, DUCKBUCK is here to bring a splash of fun and a wave of wealth to the crypto community. Our mission? To create a financial revolution that’s as entertaining as a Saturday morning cartoon and as lucrative as a golden egg-laying duck!

## Features

- **Community-Driven**: Duck Buck prioritizes transparency, inclusivity, and active engagement with its community.
- **Charitable Initiatives**: A portion of Duck Buck’s proceeds will be dedicated to wildlife conservation efforts.
- **Gamification**: Interactive games and challenges will keep the community entertained and involved.

## Airdrop Mechanism

The DuckBuck airdrop aims to reward early adopters and active community members, creating a strong foundation of loyal supporters. Here’s how it will work:

### Registration
- Users will sign up on the official DuckBuck website with their wallet address and social media handles.
- Verification of task completion through integration with social media APIs.

### Distribution
- The airdrop will distribute 250,000,000 $DUCK tokens
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
- **Ticker**: $DUCK
- **Total Supply**: 1,000,000,000 $DUCK tokens will be minted.

### Distribution
-   **Community Airdrop**: 25% (250 Million)
    -   To create initial buzz and widespread adoption.
    -   Distributed to users who complete simple tasks (e.g., joining social media channels, sharing posts).
-   **Liquidity Pool**: 45% (450 Million)
    -   To provide liquidity on decentralized exchanges (DEX).
-   **Development Fund**: 10% (100 Million)
    -   For ongoing development, marketing, and ecosystem growth.
    -   Locked for 1 year with gradual release over 3 years.
-   **Marketing Fund**: 10% (100 Million)
    -   For promotional activities, partnerships, and influencer collaborations.
-   **Team Allocation**: 5% (50 Million)
    -   To reward the founding team.
    -   Locked for 2 years with gradual release over 4 years.
-   **Charity Fund**: 5% (50 Million)
    -   To support charitable causes and increase positive public perception.

## Key Mechanics

- **Transaction Fees**: A 2% transaction fee will be applied, with 1% redistributed to holders and 1% burned to create deflationary pressure.
- **Staking Rewards**: Holders can stake their $DUCK tokens to earn additional rewards and participate in governance decisions.

## Conclusion

Duck Buck is more than just a meme coin; it is a movement towards a more engaging and fun cryptocurrency landscape. By combining the playful nature of internet culture with robust blockchain technology, Duck Buck aims to build a strong community and make a meaningful impact. Join us on this quacking adventure and be part of the Duck Buck revolution!`
