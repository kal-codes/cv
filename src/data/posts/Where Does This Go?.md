---
title: "Where Does This Go?"
url: "https://grapes-move-dqp.craft.me/0nDMkSG3T6DUl8"
date: "2025-04-10"
---

# Where Does This Go?

## **Tightening the Feedback Loop**

I’ve been working on a side project, as software nerds are wont to do. My ‘excuse’ this time was exploring how GenAI tools could meaningfully improve the development experience. [NanoCast](www.nanocast.ai) is my attempt to investigate this new paradigm by building something I’d genuinely use. Over a couple of months spent casually building on the side, I’ve had several revelations that left me reflecting on their implications - motivating me to finally write this.

One such moment came when building out the auth screen for the iOS client. OpenAI had just released its 4o image generation model. After Ghiblifying my friends and family, I wondered how the tool would handle creating a simple mockup for an the auth screen. I fed it the NanoCast logo (initially created with MidJourney, recently cleaned up with 4o) and asked it to generate the UI. It just… did. That was nice. I didn’t have to fiddle with Figma or Photoshop, although typically I’d mock things up directly in SwiftUI for mobile. However, the real ‘aha’ came next. Out of curiosity, I switched models to o3-mini-high and simply typed, ‘Ok, now build it.’ And again, it just… did. Sure, the logo sizing needed a quick tweak, but everything else - including the integration with my auth backend - worked perfectly. I was blown away. Not that this outcome was entirely unexpected, but clearly seeing the near-term future unfold before me felt profound.

## **Concrete Changes**

Software development has always been driven by efficiency. Reducing cycle time by using things like IDEs with built-in debugging, rapid deployment frameworks, or CI/CD pipelines has long been one of the most impactful levers we have. Historically, these improvements have felt largely reactive: providing better context or automating repetitive tasks previously done manually.

Now, however, we’re entering a phase where efficiency improvements can become proactive rather than merely reactive. Instead of improving tools to help fix or speed up existing manual processes, we’re rapidly expanding into a toolkit focused squarely on improved output efficiency.

To be clear, we’ve had similar attempts before. Design tools capable of outputting backing code (Figma, Sketch) and sophisticated interaction design platforms (Protopie, Play) have existed for years. Yet these still typically required expert designers to carefully build prototypes, which developers then painstakingly translated into working software. I expect a dramatic flattening of this particular workflow in the very near future.

Over my career, I’ve experienced a clear evolution from reference books, to StackOverflow, and now to GenAI. Rather than degrading our skills, each step has distilled collective knowledge into tighter, more flexibly applicable feedback loops. Sure, GenAI still has a major hallucination problem, but have you ever read StackOverflow answers?

This is all to say nothing of the arrival of Agent workflows. ‘Vibe Coding’ the entire web app for NanoCast using Windsurf has been a real joy - far closer to a design experience, where you simply ‘create,’ rather than traditional development. Offloading the cognitive burden of constantly battling cryptic terminal errors thrown from any one of the million node_module dependencies makes the GenAI era worth embracing, even if it puts me out of a job in a few years.

Joking aside, Agent workflows are going to be the real deal. They already feel remarkably like working alongside the talented remote developer I’ve only met through Zoom. Of course, when Claude Sonnet-3.7-Thinking decides to rewrite your entire middleware layer after a trivial styling request, you quickly realize the need for more mature tooling and guardrails. Improvements in versioning, granular rollback capabilities, and even standardized ‘development constitutions’ could greatly enhance these workflows, entirely independent of advancements in model capabilities.

[MCP](https://www.anthropic.com/news/model-context-protocol) is another rapidly growing paradigm in the GenAI space. While I haven’t explored its technical underpinnings yet, its practical implications are already impressive. Using Supabase’s MCP, I effortlessly prompted my way to a fully functioning relational database tables for user profiles and article metadata without even logging into Supabase. Developer tooling is just one use case. With OpenAI (and now Google as I’m writing this) recently announcing support for MCP, the door is wide open for the proliferation of this paradigm. At least we can dodge the classic [XKCD ‘standards’ comic](https://xkcd.com/927/) for now.

Considering my current workflow, I don’t actually notice much functional difference using these tools. Sure, design and prototyping are getting easier, but I’ve spent much of my career leading teams, scoping projects, and breaking down tasks into delegatable chunks. My current GenAI-driven workflow feels strikingly similar to managing a highly responsive team. And that’s the wild part - the writing is already on the wall. Some tasks traditionally reserved for human developers can, even now, be meaningfully augmented by AI systems. This trend seems set to accelerate. Whether it ultimately leads to fewer software development jobs or whether demand for novel systems will outpace this replacement remains an open question. Jevons paradox and all...

## Two Truths

A confession: I’m telling myself that this project is almost exclusively relying on GenAI tools because I want to test them out, improve how I interface with them, and stay current. Part of me also knows that I am offloading a lot of the additional cognitive work that I just can’t be bothered to do after a long day of doing the same thing for my day job. I mean, both of these things can be true at once - and they are - I’m just not sure which is the bigger motivator. And that raises a question that’s becoming common with the AI explosion: does it even matter?

I, like many, got into software because I truly enjoy building things. It’s a weird realization to have a decade into your career, but I never really cared about the hot new framework or learning yet another language for the sake of learning it. Maybe that’s career suicide to admit out loud. My motivations for sticking through the difficult parts of this career have always been for a love of solving problems and building things. Possibly this is the reason I have taken to GenAI so readily. From my perspective, it doesn’t erode my ability to do what matters - solve the problem at hand. If anything, it’s close to removing the things I truly dislike about the profession. Lazily copying and pasting a stacktrace into a chat window and having the AI do the cognitive work of fixing the dumb configuration error or typo I made? Yeah, sign me up for that reality.

Maybe the real question here isn’t why I’m doing this, but what these shifting motivations say about the changing nature of software development itself.



## What Even Is Software Development?

It’s a loaded question with endless flavors. It feels to me that much of the discussion around software development I see is people projecting their perspectives and talking past each other. If you’re a ‘business person’, it’s an annoyingly necessary cost center but table stakes for a 21st century business. If you’re a developer, it’s a sacred craft that’s often tainted by shoddy business decisions that impede code cleanliness. The issue is that both perspectives are valid. Nothing happens in a vacuum and there are compromises abound.

Software development is fundamentally about solving problems. Whether your perspective is purely business-driven or rooted in craft, this truth holds. Craftsmanship matters, but not as an end - it matters precisely because it creates better, more maintainable, and ultimately more effective solutions. Likewise, business pragmatism matters because it anchors solutions in reality. Both sides of the same coin.

All that begs the questions: Does it matter that my skills for hand written code might atrophy when the tools just continue to get better? Does it matter if you can’t tell the output was from a human or computer? There are certainly arguments on both sides, but do you write your own assembly code? Do you navigate via celestial positioning with a sextant? We went from assembly to C, C to Python, Python to Prompt. This feels like a new layer of abstraction - the next (final?) coding language is natural language.

Viewed through this lens, the progressive abstraction from assembly code to high-level languages and now to natural language isn’t so much losing touch with the essence of software development; it’s refining it. We’re distilling the nature of software - problem-solving - into clearer, more accessible interfaces. Perhaps the shift toward natural language isn’t about losing touch with the craft, but rather redefining what craftsmanship means entirely?

> ## As I See It

> Without trying to overstep my authority, or lack thereof, on the matter, the whole ‘don’t learn to code’ crowd seems to be missing the forest from the trees. (side note: what a hilarious heel turn in popular discourse coding has taken in the past ~5 years). As often is the case with absolute statements (Siths and such), it’s missing the very nuance that lends the statement *some* validity. As a counter question to this type of sentiment, would you rather have a physical therapist build your big idea into an app using AI or a software engineer? Surely it’s self preservation on some level, but the idea that all software engineers are suddenly screwed because AI can write code seems absurd to me. Who better to leverage these tools than us?

> Not that anyone asked, but my advice to people in this field is don’t be a code monkey. I touched on it a bit before, but systems thinking, orchestration, and delegation skills seem to be good candidates for skill investments in the coming Agentic age of software development. I’ve developed software professionally for a decade, primarily in web development, and JavaScript syntax still gives me the willies. Unironically, one of my favorite things about GenAI is that syntax worries become largely irrelevant.



## On the Event Horizon

At the risk of dramatically broadening the scope here, I want to get down some thoughts on these implications over a longer timeline. Agentic workflows will almost certainly reduce - likely drastically - the need for large software development teams. Smaller, highly leveraged teams capable of rapid development cycles and low management overhead will become not just possible but commonplace. In fact, this reality is practically upon us.

Taking this a step further, imagine GenAI systems sufficiently advanced to reliably generate their own consumer-facing interfaces and applications. Tools like [v0](http://v0.dev) signal this future is rapidly approaching. When this happens, many companies will cut out substantial portions of the human labor traditionally required to create and maintain these systems.

Yet, even in such a future, I anticipate persistent demand for deterministic, consistent, reproducible software. Critical applications - such as those requiring high reliability, regulatory compliance, or rigorous security - will likely remain sthe domain of highly specialized, small teams or individuals catering to increasingly specific niches. At the same time, niche applications unable to generate sufficient revenue to satisfy corporate balance sheets will increasingly fall under the purview of hacker and maker communities. These communities are likely to flourish as the overall cost of producing software continues trending downward, democratizing software creation even further.

This leads to an open question: Will widespread GenAI adoption significantly shrink the developer workforce, or paradoxically increase overall demand? It’s conceivable that the ease and accessibility of software creation enabled by GenAI might spur an explosion of bespoke, hyper-specialized applications, ironically requiring more (though smaller) teams rather than fewer.

Whatever the exact outcome, one thing feels clear: the structure and dynamics of software teams - and the profession itself - will be fundamentally reshaped.



## Where Next?

I’ve been meaning to get these thoughts out for a while now. The circus unfolding in front of me finally became impossible to ignore. Moments during my casual experimentation with GenAI on a side project left me genuinely dumbstruck. Implications of the tangible outcomes being generated right in front of me became too loud to ignore. 

It’s plain to see the near-term impacts: tighter feedback loops, faster cycles, and increasingly leveraged, smaller software teams. The larger questions then become: What does this mean? Where does this go?

It seems inevitable that the profession of software development is about to be deeply altered. Smaller teams, aided by countless AI agents, will require far less management and coordination overhead, driving development costs dramatically downward. Will GenAI ultimately shrink or expand the demand for software professionals? Will we see a bifurcation - declining need for traditional corporate developers contrasted against an explosion of activity in niche, maker-driven communities?

As I write this, I find myself contemplating something deeper: the identity of the software developer itself. If software development is fundamentally problem-solving, then perhaps our identity isn’t tied strictly to code, frameworks, or tools - but rather to the outcomes and impact we create. Embracing GenAI doesn’t mean giving up our identity; instead, it means expanding it. It means recognizing that the true core of being an engineer is adaptability, curiosity, and the relentless drive to solve problems - regardless of the methods we use to get there.

Maybe this outlook is partly self-preservation, or perhaps it’s a fundamental optimism about the world. Probably, it’s both. At any rate, the writing is spray-painted in bold, blingy block letters on every wall: things are changing, fast. The future of software development might look unfamiliar, but it’s also ripe with opportunities. Perhaps the real question now isn’t whether we’re ready for these changes, but how we choose to embrace them.

