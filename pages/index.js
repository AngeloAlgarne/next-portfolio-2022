import InstrumentList from '../components/instruments/InstrumentList';
import database from '../database/data.json'

function HomePage(props) {
    return <InstrumentList instruments={props.data} />;
}

export async function getStaticProps() {
    // fetch data from an API
    const data = database['instruments']; // static in this case

    // then return data object
    return {
        props: { 
            data: data
        },
        revalidate: 10 // every 10 seconds, reload the data IFF there are requests
    };
}

/*
export async function getServerSideProps(context) {
    // const req = context.req;
    // const res = context.res;

    // fetch data from an API
    const data = database['instruments'] // in this case, dummy first

    // then return data object
    return {
        props: { 
            data: data
        },
    };
}*/

export default HomePage;