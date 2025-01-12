const { Console } = require("console");
const SignatureGenerator = require("../src/SignatureGenerator"); // Sesuaikan dengan path yang benar

describe("SignatureGenerator", () => {
  let signatureGen;
  let accessToken;
  let stringToSign;

  // Setup untuk setiap tes
  beforeEach(() => {
    // Memuat konfigurasi dotenv
    require("dotenv").config();

    // Mengakses variabel lingkungan dari .env
    const clientId = process.env.API_CLIENT_ID;
    const clientSecret = process.env.API_CLIENT_SECRET;
    accessToken = process.env.API_ACCESS_TOKEN;
    stringToSign = clientId + ":" + clientSecret;
    signatureGen = new SignatureGenerator(accessToken); // Inisialisasi dengan secret key
  });

  test("should be able to generate signature for data", () => {
    const data = stringToSign;
    const expectedSignature =
      "27dd2edec42d5bdf371f861e9e40516e947c5dfba9a8ae57ed80670caddfc716"; // Signature yang diharapkan (ganti dengan yang benar)

    const result = signatureGen.generateSignature(data);

    expect(result).toBe(expectedSignature);
  });
});
