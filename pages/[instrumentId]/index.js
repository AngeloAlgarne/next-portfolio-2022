import { useRouter } from "next/router";
import InstrumentDetail from "../../components/instruments/InstrumentDetail";
import database from '../../database/data.json'

function InstrumentDetails(props) {

    return (
        <InstrumentDetail 
            image={props.data.image}
            title={props.data.title}
            description={props.data.description}
        />
    )
}

export async function getStaticPaths() {
    // fetch data from an API
    const data = database['instruments']; // static in this case

    const pathsList = data.map((instrument) => (
        {params: {instrumentId: instrument['id']}}
    ));

    return {
        fallback: true,
        paths: pathsList
    }
}

export async function getStaticProps(context) {
    const id = context.params.instrumentId;

    // fetch data from an API
    const data = database['instruments']; // static in this case

    // set keys for the id
    const instrumentKeys = {}
    data.map((instrument) => (
        instrumentKeys[instrument['id']] = instrument
    ));

    const fetchedData = instrumentKeys[id];

    // then return data object
    return {
        props: { 
            data: fetchedData
        },
        revalidate: 10 // every 10 seconds, reload the data IFF there are requests
    };
}

export default InstrumentDetails