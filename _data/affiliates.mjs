import Fetch from "@11ty/eleventy-fetch";
import parser from 'fast-xml-parser';

const affiliates = async function () {
	let url = 'https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=28187&bannerid=107708&feedid=3417';
	let response;

	try {
		response = await fetch(url, {
		  duration: "1w", // save for 1 week
		  type: "xml"
		});
	  } catch (error) {
		console.error(`Fetch failed in affiliate.js. ${error}`);
	  }

	let feed;
	const response_awaited = await response.text()
	const result = parser.XMLValidator.validate(response_awaited);

	if (result === true) {
	  const xmlparser = new parser.XMLParser();
	  feed = xmlparser.parse(response_awaited);
	} else {
	  console.error(
		`affiliate.js - XML is invalid. Reason: ${result.err.msg}`
	  );
	}

	let posts = feed.produkter.produkt;

	let transformedPosts = posts.map((post) => {
		let transformedPost = {};
		transformedPost.retailer = post.forhandler;
		transformedPost.brand = post.brand;
		transformedPost.name = post.produktnavn;
		transformedPost.id = post.produktid;
		transformedPost.description = post.beskrivelse;
		transformedPost.price = post.nypris;
		transformedPost.old_price = post.glpris;
		transformedPost.old_stock = post.lagerantal;
		transformedPost.image_url = post.billedurl;
		transformedPost.url = post.vareurl;
		return transformedPost;
	});

	return transformedPosts;
};
export default { affiliates };
