
import Link from "next/link";
import NewInstrumentForm from "../../components/instruments/NewInstrumentForm";

function NewInstrumentPage() {
    function addInstrumentHandler(newData) {
        console.log(newData);
    }

    return (
        <NewInstrumentForm onAddMeetup={addInstrumentHandler} />
    );
}

export default NewInstrumentPage;