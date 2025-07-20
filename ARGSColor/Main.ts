export default function getArgs() {
  if (process.argv[2] == "--Hex") {
    console.log(parseInt(process.argv[3], 16));
  }

  if (process.argv[2] == "--Dec") {
    console.log(parseInt(process.argv[3], 16));
  }
}

getArgs();
