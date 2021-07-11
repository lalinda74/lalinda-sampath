import './stories.scss';
import Article from '../../components/article/article';
import Image from '../../assets/images/profile-image.jpeg';

function Stories() {

    const articlesList = [
        { title: 'Which Text Case to Use', desc: 'Ever wondered which text case to use ? A little thing like capitalization...', img: Image, src: 'https://medium.com/@diaslalinda/which-text-case-to-use-d583b2ad2006' },
        { title: 'UX for Call Center Applications', desc: 'Recently I wanted to travel to USA. I decided to book flights...', img: Image, src: 'https://medium.com/@diaslalinda/ux-for-call-center-applications-7b47116b6862' },
        { title: 'Managing Large UI Development Projects', desc: 'Usually people thinks that CSS or SASS can be written in any way.', img: Image, src: 'https://medium.com/@diaslalinda/managing-large-ui-development-projects-61a7166834f7' },
        { title: 'Media Queries in Responsive Web Design', desc: 'For those who wonder what media queries is, media query...', img: Image, src: 'https://medium.com/@diaslalinda/media-queries-in-responsive-web-design-51bfb9fcc9ff' }
    ];

    function ShowArticles(props) {
        const expList = props.list;
        const listItems = expList.map((item, i) =>
            <li key={i}>
                <Article {...item} />
            </li>
        );
        return (
            <ul className="blocks">{listItems}</ul>
        );
    }

    return (
        <section className="wrapper">
            <div className="p-parallax-img"></div>
            <div className="content wrapper--slim">
                <div className="content__inner-wrapper">
                    <h6 className="p-label-emp">I SHARE</h6>
                    <h2 className="mb-5 p-title">Stories and Learnings</h2>
                </div>
                <ShowArticles list={articlesList} />
            </div>
        </section>
    );
}

export default Stories;
