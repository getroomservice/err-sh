module.exports = (request, response) => {
  const { url } = request;
  const urlParts = url.split("/");

  if (url === "/") {
    response.writeHead(302, {
      Location: `https://www.roomservice.dev`
    });

    response.end();
    return;
  }

  if (urlParts.length < 3) {
    return {
      error: "Please specify all the missing data (see the repo)!",
      errorHandle: "missing_data"
    };
  }

  const isUs = urlParts.length === 3;
  const user = isUs ? "getroomservice" : urlParts[1];
  const repo = urlParts[isUs ? 1 : 2];
  const code = urlParts[isUs ? 2 : 3];

  response.writeHead(302, {
    Location: `https://github.com/${user}/${repo}/blob/master/errors/${code}.md`
  });

  response.end();
};
