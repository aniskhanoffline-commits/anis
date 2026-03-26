import BlogPostLayout from "@/components/BlogPostLayout";
import mediaImg from "@/assets/campaign-media.jpg";

const MediaArticle = () => (
  <BlogPostLayout
    title="Amplifying Nzema Voices: Our Media Awareness Campaign"
    date="February 5, 2026"
    category="Media"
    image={mediaImg}
  >
    <p>
      The challenges facing Nzema communities often go unheard beyond the borders of Western Ghana. Without visibility, it becomes difficult to attract the resources, partnerships, and attention needed to drive meaningful change. That's why NzemaToday launched its Media Awareness Campaign — to amplify the voices of the people we serve and shine a light on both the struggles and triumphs of these remarkable communities.
    </p>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Telling Stories That Matter</h2>
    <p>
      Our media team has been on the ground, capturing the stories of everyday heroes in Nzema communities. Through documentary films, photo essays, and social media content, we are bringing these stories to a global audience.
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Produced 5 short documentary films on community life and challenges</li>
      <li>Published 20+ photo essays across social media platforms</li>
      <li>Reached over 100,000 people through our digital campaigns</li>
      <li>Partnered with 3 Ghanaian media outlets for coverage</li>
    </ul>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Community Radio Initiative</h2>
    <p>
      In many rural areas, radio remains the most accessible form of media. NzemaToday has partnered with two local radio stations to broadcast weekly programs in the Nzema language. These broadcasts cover health tips, educational content, community news, and cultural programming.
    </p>
    <p>
      "The radio program has become something the whole village looks forward to," says radio host Kofi Essel. "People gather in the evenings to listen. It makes them feel seen and heard. It reminds them that the world hasn't forgotten about them."
    </p>
    <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Training the Next Generation of Storytellers</h2>
    <p>
      We believe that the most authentic stories are told by the people who live them. That's why we've launched a youth media training program, teaching young Nzema residents photography, videography, and journalism skills. Already, 15 young people have completed the program and are creating content that shares their community's narrative with the world.
    </p>
    <p>
      Media is more than just communication — it's a tool for advocacy, empowerment, and connection. By supporting our media campaigns, you help ensure that Nzema voices are heard loud and clear.
    </p>
  </BlogPostLayout>
);

export default MediaArticle;
