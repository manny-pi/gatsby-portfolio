/* 
Uploads the folders in the `public/` directory to my `my-gatsby-portfolio` S3 bucket.
*/

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { opendir } from "node:fs/promises";


const client = new S3Client();
opendir("public", async (err, dir) => {
    if (err === "ENONET") {
        console.log('Failed')
    }
    let entries = Array.from(dir);
    console.log(entries); 
});

