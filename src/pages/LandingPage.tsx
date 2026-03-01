import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import FeatureCard from '../components/FeatureCard';
import { BarChart2,  BookOpen, FolderHeart } from 'lucide-react';
import './LadingPage.css';
import heroImage from "../images/Eduflow.jfif";
function LandingPage(){
    const navigate = useNavigate();
    return(
    <>
        <div className="landing-page">
            <section className="container hero-section">
                <div className="hero-content">
                    <p className="hero-subtitle">Intelligent Education Management</p>
                    <h1 className='hero-title'>Streamline <br/>your<br/> <span>Classroom</span></h1>
                    <p className='hero-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quam necessitatibus optio obcaecati sit eos nesciunt explicabo natus? Laborum quam asperiores, veritatis quaerat mollitia sint tempora ea vero culpa alias!</p>
                    <div className='hero-action'>
                        <Button size='lg' onClick={()=>navigate('/dashboard')}>
                            Go to Courses
                        </Button>
                        <Button variant='outline' size='lg' onClick={()=>navigate('/dashboard')}>
                            Watch a Demo
                        </Button>
                    </div>
                </div>
                <div className='hero-image-wrapper'>
                    <img src={heroImage} alt="Image Edu Flow" className='hero-image' />
                </div>
            </section>
            <section className='container feature-section'>
                <div className='feature-header'>
                    <h1>Simplify...</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti eos incidunt ullam suscipit in, ratione earum facere fugiat maxime illo deleniti iure ut eaque explicabo consequuntur quos soluta? Perferendis, ut!</p>
                </div>
                <div className='feature-grid'>
                    <FeatureCard 
                        icon={<BookOpen/>}
                        title='Course Tracking'
                        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio amet enim maiores. Illo sint nam voluptatem dolore. Molestiae tempore cum recusandae illo pariatur aliquid laboriosam hic! Atque impedit quae ipsam?'
                    />
                    <FeatureCard 
                        icon={<BarChart2/>}
                        title='Course Tracking'
                        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio amet enim maiores. Illo sint nam voluptatem dolore. Molestiae tempore cum recusandae illo pariatur aliquid laboriosam hic! Atque impedit quae ipsam?'
                    />
                    <FeatureCard 
                        icon={<FolderHeart/>}
                        title='Course Tracking'
                        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio amet enim maiores. Illo sint nam voluptatem dolore. Molestiae tempore cum recusandae illo pariatur aliquid laboriosam hic! Atque impedit quae ipsam?'
                    />
                </div>
            </section>
        </div>
    </>
    );
}
export default LandingPage;