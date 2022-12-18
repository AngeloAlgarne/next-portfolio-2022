import { useState, useEffect } from 'react';

import Card from '../ui/Card';
import Image from 'next/image';
import modal_classes from './InstrumentDetail.module.css';
import classes from './InstrumentItem.module.css';

function InstrumentDetail(props) {
    // const [isBrowser, setIsBrowser] = useState(false);

    // useEffect(() => {
    //     setIsBrowser(true);
    // }, []);

    return (
        <div className={modal_classes.overlay}>
        <div className={modal_classes.modal}>
            <Card>
                <div className={modal_classes.image}>
                    <Image src={props.image} alt={props.title} width='800' height='800' />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </Card>
        </div>
        </div>
    )
}

export default InstrumentDetail;