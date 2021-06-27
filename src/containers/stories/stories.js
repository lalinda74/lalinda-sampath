import './stories.scss';
import Article from '../../components/article/article';

function Stories() {

    const commonProps = { company: 'Shopify', position: 'UI/UX Engineer', duration: 'July, 2019' };

    return (
        <section className="wrapper">
            <div className="p-parallax-img"></div>
            <div className="content">
                <h6 className="p-label-emp">I SHARE</h6>
                <h2 className="mb-3 p-title">Stories and Learnings</h2>
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
        </section>
    );
}

export default Stories;
