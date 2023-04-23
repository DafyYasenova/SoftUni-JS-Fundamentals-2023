function followers(array) {
    let line = array.shift();

    let followersObj = {};

    while (line !== "Log out") {
        line = line.split(": ");
        let command = line[0];
        let username = line[1];

        switch (command) {
            case "New follower":
                if (!followersObj.hasOwnProperty(username)) {
                    followersObj[username] = {
                        like: 0,
                        comment: 0
                    }
                }
                break;
            case "Like":
                let like = Number(line[2]);
                if (!followersObj.hasOwnProperty(username)) {
                    followersObj[username] = {
                        like: like,
                        comment: 0
                    }
                } else {
                    followersObj[username].like += like;
                }
                break;
            case "Comment":
                if (!followersObj.hasOwnProperty(username)) {
                    followersObj[username] = { like: 0, comment: 1 }
                } else {
                    followersObj[username].comment += 1;
                }
                break;
            case "Blocked":
                if (!followersObj.hasOwnProperty(username)) {
                    console.log(`${username} doesn't exist.`);
                } else {
                    delete followersObj[username];
                }
                break;
        }
        line = array.shift();
    }
    let entries = Object.keys(followersObj);


    console.log(`${entries.length} followers`);

    for (let name of entries) {
        let likeCount = followersObj[name].like;
        let commentsCount = followersObj[name].comment;

        console.log(`${name}: ${likeCount + commentsCount}`);
    }
}
