const forge = require('node-forge');

function generateKeyPair() {
  const rsa = forge.pki.rsa;
  rsa.generateKeyPair({bits: 2048, e: 0x10001}, (err, keypair) => {
    if (err) {
      console.error('Error generating key pair:', err);
      return;
    }

    // Extract the public key in PEM format
    const publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);
    // Extract the private key in PEM format (if needed)
    const privateKeyPem = forge.pki.privateKeyToPem(keypair.privateKey);

    // Print the public key
    console.log('2048-bit RSA business public key generated:');
    console.log(publicKeyPem);

    // Optionally, print the private key
    // console.log('Private Key:');
    // console.log(privateKeyPem);
  });
}

generateKeyPair();
