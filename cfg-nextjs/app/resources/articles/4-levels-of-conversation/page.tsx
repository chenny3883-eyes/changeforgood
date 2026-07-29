import Link from 'next/link';

export const metadata = {
  title: 'When We Change How We Talk, We Change What We Build — Chenny Galano',
  description: 'A reflection on the 4 levels of conversation from the IDEAS Asia Pacific Co-Initiating Workshop in Yokohama, Japan. By Chenny F. Galano.',
};

export default function ArticlePage() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 28px 80px' }}>

      {/* Back link */}
      <div style={{ padding: '24px 0 0' }}>
        <Link href="/resources" style={{ fontSize: '13px', color: 'var(--cfg-gold)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          ← Back to Resources
        </Link>
      </div>

      {/* Cover image */}
      <div style={{ borderRadius: '14px', overflow: 'hidden', marginTop: '28px' }}>
        <img src="/photos/article-1-cover.png" alt="When We Change How We Talk, We Change What We Build" style={{ width: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
      </div>

      {/* Article header */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.10)', paddingBottom: '32px', marginBottom: '40px', marginTop: '32px' }}>
        <span className="tag-purple" style={{ fontSize: '11px', marginBottom: '16px', display: 'inline-block' }}>Leadership</span>
        <h1 style={{ fontSize: '30px', fontWeight: '700', lineHeight: '1.3', color: '#fff', margin: '0 0 20px' }}>
          When We Change How We Talk, We Change What We Build
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6', margin: '0 0 24px', fontStyle: 'italic' }}>
          A reflection from the IDEAS Asia Pacific Co-Initiating Workshop, Yokohama, Japan
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.20)', border: '1.5px solid rgba(212,160,23,0.40)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>
            C
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff' }}>Chenny F. Galano</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.50)' }}>Founder, Change For Good Consulting &nbsp;·&nbsp; 8 min read</div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="article-body">

        <p>There is a framework I keep coming back to. I have seen it surface in boardrooms, in community circles, in workshops with leaders across Asia Pacific — and every time it shows up, something in the room shifts.</p>

        <p>It is a conversation matrix that maps how we talk to one another — from the most surface level of communication all the way to the deepest, most generative kind of dialogue. The framework was developed by Dr. Otto Scharmer of MIT&rsquo;s Sloan School of Management, and I encountered it again in a particularly meaningful way during the IDEAS Asia Pacific Co-Initiating Workshop in Yokohama, Japan.</p>

        <p>My dear colleague and friend, Bradley Chenoweth — Lead Trainer and Advanced Mediator of Resolution Institute and Director at the Center for Dialogue, Australian National University — introduced this concept as a setup to a dialogue activity. And as he did, something clicked for me that I had not quite articulated before.</p>

        <blockquote className="article-quote">
          The future we build starts with how we are talking right now.
        </blockquote>

        <h2>The Past Lives in Our Conversations</h2>

        <p>When we speak from habitual patterns — our default assumptions, our well-worn interpretations, our rehearsed reactions — we are not creating something new. We are reinforcing what already exists.</p>

        <p>Think about how this plays out in our social media feeds today. Digital platforms enable us to cluster with people who think like us, reinforcing beliefs and rejecting nuance. Information bubbles and curated feeds amplify polarization. We end up in conversations that simply echo back what we already believe — and so the world we collectively speak into existence keeps looking the same. The future is shaped not by new thinking, but by the recycled past.</p>

        <p>This is the first level of the matrix: <strong>Downloading</strong> — or what Bradley called <em>Talk Nice</em>. We say things we have said before. We confirm what we already know. We keep the peace on the surface while nothing real moves underneath.</p>

        <p>Then comes what Scharmer calls <strong>Talking Tough</strong> — or Debate. This is the level where there is real tension. Two conflicting ideas. Two different sets of data. Two people convinced they are right. The Voice of Judgment — what Scharmer calls the VOJ — takes over. The energy and emotion involved becomes a reinforcing cycle that spirals downward. Whether the conversation ends in win or loss, what is spoken from this level continues to mirror the inner condition of both people.</p>

        <p>We see this vividly in political discourse. Different types of polarization — issue-based, partisan, and affective — become mutually reinforcing, where disagreements over policy fuel deeper negative feelings toward the other side, and those feelings in turn deepen the disagreements. The pattern becomes the prison. People stop engaging with the idea in front of them and start fighting the person behind it.</p>

        <p>This is the Debate level made visible on a societal scale. And it is not limited to politics. We see it in team meetings. In department standoffs. In organizations where every cross-functional conversation feels like a war.</p>

        <h2>The Turning Point: When Someone Chooses Curiosity Over Certainty</h2>

        <p>There is a turning point in the matrix. It does not announce itself. It usually starts quietly, with one person choosing to ask a genuine question instead of defending their position.</p>

        <p>This is <strong>Reflective Dialogue</strong> — the upper right quadrant of the matrix. Here, the conversation changes character. It is no longer about who is right. It becomes about how each person arrived at the way they see things.</p>

        <p>The shift from breakdown to inquiry begins when at least one person starts to question their own assumptions — observing with an open mind, suspending the Voice of Judgment. Rather than trying to eliminate judgment entirely, which is arguably impossible, the powerful move is to inquire into it: <em>Is that true? What is another way to see this situation? What if the opposite were true?</em> One person authentically questioning in this way has the potential to shift the entire group into a different field of conversation.</p>

        <p>An open mind means setting aside the Voice of Judgment. An open heart means overcoming the Voice of Cynicism — the inner voice that says we have tried this before and it never works. To co-create with others requires the willingness to be your authentic self and dare to be vulnerable.</p>

        <p>In this space, we begin to see differences not as threats to be defeated, but as data to be curious about. We come from compassion instead of defense.</p>

        <p>I think about what this looks like in a team setting. Imagine a product development team where engineers and the customer service department have been in friction for months — engineers pushing back on feature requests they see as impractical, while customer service feels unheard about the pain points they witness daily from clients. As long as both sides speak only from their functional expertise and defend their own ground, the conversation stays in the lower quadrants. Debate. Defense. Downloading.</p>

        <p>But when one person pauses and asks, <em>&ldquo;Help me understand what you&rsquo;re seeing on the ground&rdquo;</em> — not to score a point but because they genuinely want to know — the room changes. That is the entry point into Reflective Dialogue.</p>

        <p>Google&rsquo;s landmark research, Project Aristotle, confirmed what Scharmer describes as an inner movement. After analyzing hundreds of teams, Google found that psychological safety — the belief that team members can speak up, share ideas, and take risks without fear of punishment — was the single most critical factor in team performance, statistically correlated with higher productivity, collaboration, and innovation. What Google measured in data, Scharmer maps as a shift from the closed posture of judgment and cynicism to the open posture of genuine inquiry.</p>

        <p>And when teams begin to genuinely inquire into each other&rsquo;s perspectives, something unexpected happens: the cross-pollination of ideas from distinct areas becomes fertile ground for creativity and non-linear problem-solving. The seed of innovation is not born in the debate room. It is planted in the moment someone chooses curiosity over certainty.</p>

        <h2>The Deepest Level: Where the Future Begins to Speak</h2>

        <p>We arrive now at the deepest level of the matrix — <strong>Generative Dialogue</strong>.</p>

        <p>This is not simply a better version of debate, or even a calmer form of discussion. It is a fundamentally different quality of being together. William Isaacs — Senior Lecturer at MIT&rsquo;s Leadership Center, Founder and CEO of Dialogos, and author of <em>Dialogue and the Art of Thinking Together</em> — defines dialogue as a conversation with a center, not sides. A way of taking the energy of people&rsquo;s differences and channeling it into a new creation.</p>

        <p>Bradley brought Isaacs&rsquo; work into our workshop through a framework that illuminates why some conversations stay stuck while others become transformative. In dialogue, Isaacs identifies four essential roles — roles that, when present and in balance, make generative conversation possible:</p>

        <ul>
          <li><strong>The Mover</strong> — who initiates direction</li>
          <li><strong>The Follower</strong> — who provides completion and support</li>
          <li><strong>The Opposer</strong> — who offers correction and challenges what is being said</li>
          <li><strong>The Bystander</strong> — who holds perspective, observing what others cannot see from inside the exchange</li>
        </ul>

        <p>Without movers, there is no direction. Without followers, there is no completion. Without opposers, there is no correction. Without bystanders, there is no perspective. A healthy conversation needs all four.</p>

        <p>What makes Generative Dialogue possible is not the elimination of tension — it is what happens to each person in these roles when deep listening is practiced. The Mover no longer pushes an agenda; they offer an invitation. The Opposer no longer attacks; they protect the integrity of the idea. The Follower no longer just agrees; they amplify what is most alive in the room. And the Bystander — perhaps the most underestimated role — holds the mirror.</p>

        <p>Let me bring this into a workplace scenario many of us may recognize.</p>

        <p>Imagine a team in a hospital — doctors, nurses, and administrative staff — brought together to address a recurring problem: patients are being discharged late, causing bottlenecks across the ward. The initial meetings are tense. The doctors speak with clinical authority. The admin team pushes back about bed management targets. The nurses go quiet.</p>

        <p>This is the classic pattern where an intense move-oppose cycle between two high-powered players prevents everyone else from fulfilling their roles. The bystanders — who can often see the real dynamic — become disabled. They imagine no one wants to hear what they have to say.</p>

        <p>But then, in one session, a senior nurse does something rare. She pauses the exchange and says quietly: <em>&ldquo;I notice we keep talking about processes. But what I see every morning is that no one has asked the patient if they understand what is happening to them, or if they even have someone to go home to.&rdquo;</em></p>

        <p>The room shifts.</p>

        <p>A doctor who had been firmly in Mover mode, defending clinical protocol, stops. He asks, <em>&ldquo;What do you mean?&rdquo;</em> Not to argue. Out of genuine curiosity. And in that moment, the conversation field changes entirely.</p>

        <p>What follows is not agreement — it is inquiry. The admin officer shares data that no one had looked at together. The nurses begin to speak. New patterns become visible. By the end, the team has not just solved the discharge problem. They have redesigned their morning huddle to include the patient&rsquo;s voice.</p>

        <blockquote className="article-quote">
          That idea did not belong to any one person. It emerged from the space between them.
        </blockquote>

        <h2>What Changes When the Conversation Changes</h2>

        <p>Organizational learning cannot take place without successful dialogue — conversation that encourages collective observation and thought, enabling groups to think beyond their individual limitations.</p>

        <p>But here is what I believe most deeply about this work: it is not just the outcomes that change. It is the people.</p>

        <p>When deep listening is truly practiced — when each role in the dialogue is honored and each person feels genuinely seen — something shifts not just in the result but in the individual. What you used to defend, you now hold more lightly. What you used to dismiss, you now find meaningful. Your identity moves. You leave the conversation not the same person who walked in.</p>

        <p>This is what Generative Dialogue makes possible. Not just a better meeting. Not just a smarter team. But a different kind of person showing up to the next conversation — and the one after that.</p>

        <p>The conversations we are having right now are building the structure of the reality we will live in tomorrow. Every word spoken from habitual judgment reinforces the world we already have. Every moment of genuine inquiry opens a door to the world we could create.</p>

        <p>So the question worth sitting with is this: <strong>What level are we speaking from?</strong></p>

        <p>And the more important one: <strong>What level are we willing to move to?</strong></p>

        {/* Author bio */}
        <div style={{ marginTop: '56px', padding: '28px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,160,23,0.18)', borderRadius: '14px' }}>
          <p className="slabel" style={{ marginBottom: '12px' }}>About the author</p>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.75', margin: 0 }}>
            <strong style={{ color: '#fff' }}>Chenny F. Galano</strong> is the Founder of Change For Good Consulting and a Senior Consultant and Executive Coach at The Rizal Academy for Innovation and Leadership (TRAIL). She serves as Regional Faculty and member of the Design Team for the IDEAS Asia Pacific Leadership Lab — a program anchored in MIT Sloan Global Programs and United in Diversity. Her work spans leadership transformation, organizational change, innovation facilitation, and executive coaching across the Philippines and Asia Pacific.
          </p>
        </div>

        {/* CTA */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>Want to explore what this means for your team?</p>
          <Link href="/contact" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Start a conversation →
          </Link>
        </div>

      </div>
    </div>
  );
}
