
const {Router} = require('express');
const multer = require("multer"); //Módulo multer para manejar la carga de archivos. Más adelante.
require("dotenv").config();
const nodemailer = require("nodemailer");
const {EMAILSEND, EMAILRECEIVE, PASS} = process.env;

const router = Router();
const storage = multer.diskStorage({ // Configuración de multer
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "files_emails")); // Ruta donde se guardarán los archivos adjuntos
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
});

const transporter = nodemailer.createTransport({ // Configuración del servicio de correo electrónico, estelo envia
    // host: "smtp.forwardemail.net",
    // port: 465,
    service: "gmail",
    secure: true,
    auth: {
        user: EMAILSEND,
        pass: PASS
    },
});
  
const upload = multer({ storage: storage });

// router.get("/", (req, res) => {
//     res.render("Home");
//   });

router.post("/enviar", upload.single("fileAdjunto"), (req, res) => {

    try {
        const { nombre, correo, mensaje } = req.body;
        const fileAdjunto = req.file; //No necesario aún. Solo para archivos.
      
        let attachments = []; // Donde se almacenará el archivo
    
        if (fileAdjunto) {
          // Ruta absoluta donde se guarda el archivo adjunto
          const filePath = path.join(__dirname, "files_emails", fileAdjunto.filename);
      
          attachments = [
            {
              filename: fileAdjunto.name,
              path: filePath,
            },
          ];
        }

        // Definir el contenido del cuepro para el correo electrónico que deseas enviar
        const mailOptions = {
          from: EMAILSEND,
          to: EMAILRECEIVE,
          subject: `Correo Desde La Página Web de ${nombre}`,
          text: `correo: ${correo}, mensaje: ${mensaje}`,
          attachments: attachments, //Archivos.
    //    html: "<b>Hello world?</b>",
        };
        // Envía el correo electrónico utilizando el método sendMail del objeto transporter
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            throw new Error("Error al enviar el correo:", error)
          } else {
            res.status(200).json({ info: info.response });
          }
        }); 
        // res.render("Home");       
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

module.exports = router;