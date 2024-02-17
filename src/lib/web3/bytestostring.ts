import Web3 from 'web3';

function hexToAscii(hexString: string): string {
    let asciiString = '';
    for (let i = 2; i < hexString.length; i += 2) {
        let byte = parseInt(hexString.substr(i, 2), 16);
        if (byte !== 0) {
            asciiString += String.fromCharCode(byte);
        }
    }
    return asciiString;
}

export function convertBYTS(hexString: string): string {
    const web3 = new Web3();
    try {
        return web3.utils.hexToUtf8(hexString);
    } catch (error) {
        return hexToAscii(hexString);
    }
}

