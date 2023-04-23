function password(data) {
  let currentNumber = Number(data.shift());
  let pattern = /(.+)[>](?<gr1>[0-9]{3})([\|])(?<gr2>[a-z]{3})\3(?<gr3>[A-Z]{3})\3(?<gr4>[^\<\>]{3})[<]\1/
  for (let i = 0; i < currentNumber; i++) {
      let match = data[i].match(pattern);
      if (match !== null) {
          console.log(`Password: ${match.groups['gr1']}${match.groups['gr2']}${match.groups['gr3']}${match.groups['gr4']}`);
      } else {
          console.log(`Try another password!`);
      }
  }
}

password(["3",
  "##>00|no|NO|!!!?<###",
  "##>123|yes|YES|!!!<##",
  "$$<111|noo|NOPE|<<>$$",
])
/* Try another password!
Password: 123yesYES!!!
Try another password!
*/
password(["5",
  "aa>111|mqu|BAU|mqu<aa",
  "()>111!aaa!AAA!^&*<()",
  "o>088|abc|AAA|***<o",
  "asd>asd|asd|ASD|asd<asd",
  "*>088|zzzz|ZzZ|123<*",
])
/* Password: 111mquBAUmqu
Try another password!
Password: 088abcAAA***
Try another password!
Try another password!
*/

// with exec!
function password(data) {
  let currentNumber = Number(data.shift());
  let pattern = /(.+)[>](?<gr1>[0-9]{3})([\|])(?<gr2>[a-z]{3})\3(?<gr3>[A-Z]{3})\3(?<gr4>[^\<\>]{3})[<]\1/

  for (let i = 0; i < currentNumber; i++) {
      let match = pattern.exec(data[i]);
      if(match) {
          let password = match.groups.gr1 + match.groups.gr2 + match.groups.gr3 + match.groups.gr4;
          console.log(`Password: ${password}`);
          match = pattern.exec(data);
      }else {
          console.log(`Try another password!`);
      }
      match = pattern.exec(data);
  }
}

