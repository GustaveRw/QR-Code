import React, { Component} from 'react';
import QRCode from 'react-qr-code';


class Data extends Component {
    render() {
        return (
            <div>
                <h1>
                    QR Code
                </h1>
                <QRCode
                id=''
                value=''
                />
            </div>
        );
    }
}

export default Data;