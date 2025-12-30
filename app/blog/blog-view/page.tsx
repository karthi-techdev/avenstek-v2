"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, Suspense } from "react";
import { ArrowLeft, BookOpen, GamepadDirectional } from "lucide-react";

interface BlogSection {
  id: string;
  title: string;
  content: string[];
  list?: string[];
}

interface BlogPost {
  id: number;
  title: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  summary: string[];
  sections: BlogSection[];
}

/* BLOG DATA */
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why We're Building a CRM Without the CRM Baggage",
    category: "Founder Insights",
    readTime: "6 mins read",
    author: "Jenna Marks",
    date: "Jul 7, 2025",
    image: "/images/blog-img/card1.jpg",
    summary: [
      "CRMs were built for a version of sales that no longer exists: static, repetitive, manager-driven. Today's sales workflows are async, fast-moving, and human. In this piece, I share why Hexa doesn't look or feel like a traditional CRM — and why we believe that's exactly what modern teams need."
    ],
    sections: [
      {
        id: "assumption",
        title: "The assumption we started with",
        content: [
          "When we started building Hexa, we weren't just trying to 'make CRM better.' We were trying to question whether CRM, as it exists today, even makes sense anymore.",
          "We questioned why sales tools feel heavy and slow.",
          "So the question became What would a sales platform look like if it was built for the rep first — not the dashboard?"
        ]
      },
      {
        id: "broken",
        title: "Why CRMs became broken",
        content: [
          "Legacy CRMs were never really designed for the rep — they were built for management. They serve reporting, not reality. They're full of:"
        ],
        list: [
          "Static fields that reps don't update",
          "Deal stages that mean different things to different people",
          "Notes that no one reads",
          "Pipelines that feel like spreadsheets with prettier fonts"
        ],
      },
      {
        id: "different",
        title: "What we're doing differently",
        content: [
          "Hexa is built with one idea at its core: context over control.",
          "We don't want to control reps. We want to capture what actually happened — and turn it into structure that helps them move forward. That's why:"
        ],
        list: [
          "Every call summary is auto-generated and tagged",
          "Follow-ups draft themselves from conversation",
          "Deal rooms act like shared spaces, not just static records",
          "Nudges come based on signal, not timers",
          "Managers get clarity without asking for updates"
        ],
      },
      {
        id: "next",
        title: "What's next",
        content: [
          "We're not stopping at AI summaries. We're building toward a CRM that disappears into the workflow: one that knows when to speak up, when to stay out of the way, and when to remind you what matters.",
          "Hexa isn't trying to be Salesforce with a nicer skin. It's trying to be the tool that makes sales feel like sales again."
        ]
      },
      {
        id: "final",
        title: "Final Thought",
        content: [
          "CRMs shouldn't just capture data — they should create leverage. If your CRM isn't helping you sell, it's helping you stall."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Building Deal Rooms with Real-Time Threads (Without Going Full Chat App)",
    category: "Engineering",
    readTime: "6 mins read",
    author: "Taylor Nguyen",
    date: "Jul 7, 2025",
    image: "/images/blog-img/card2.jpg",
    summary: [
      "CRMs were built for a version of sales that no longer exists: static, repetitive, manager-driven. Today's sales workflows are async, fast-moving, and human. In this piece, I share why Hexa doesn't look or feel like a traditional CRM — and why we believe that's exactly what modern teams need."
    ],
    sections: [
      {
        id: "assumption",
        title: "The assumption we started with",
        content: [
          "When we started building Hexa, we weren't just trying to 'make CRM better.' We were trying to question whether CRM, as it exists today, even makes sense anymore.",
          "We questioned why sales tools feel heavy and slow.",
          "So the question became What would a sales platform look like if it was built for the rep first — not the dashboard?"
        ]
      },
      {
        id: "broken",
        title: "Why CRMs became broken",
        content: [
          "Legacy CRMs were never really designed for the rep — they were built for management. They serve reporting, not reality. They're full of:"
        ],
        list: [
          "Static fields that reps don't update",
          "Deal stages that mean different things to different people",
          "Notes that no one reads",
          "Pipelines that feel like spreadsheets with prettier fonts"
        ],
      },
      {
        id: "different",
        title: "What we're doing differently",
        content: [
          "Hexa is built with one idea at its core: context over control.",
          "We don't want to control reps. We want to capture what actually happened — and turn it into structure that helps them move forward. That's why:"
        ],
        list: [
          "Every call summary is auto-generated and tagged",
          "Follow-ups draft themselves from conversation",
          "Deal rooms act like shared spaces, not just static records",
          "Nudges come based on signal, not timers",
          "Managers get clarity without asking for updates"
        ],
      },
      {
        id: "next",
        title: "What's next",
        content: [
          "We're not stopping at AI summaries. We're building toward a CRM that disappears into the workflow: one that knows when to speak up, when to stay out of the way, and when to remind you what matters.",
          "Hexa isn't trying to be Salesforce with a nicer skin. It's trying to be the tool that makes sales feel like sales again."
        ]
      },
      {
        id: "final",
        title: "Final Thought",
        content: [
          "CRMs shouldn't just capture data — they should create leverage. If your CRM isn't helping you sell, it's helping you stall."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Why CRM Notes Had to Die",
    category: "Founder Insights",
    readTime: "7 mins read",
    author: "Jenna Marks",
    date: "Jul 7, 2025",
    image: "/images/blog-img/card3.jpg",
    summary: [
      "CRMs were built for a version of sales that no longer exists: static, repetitive, manager-driven. Today's sales workflows are async, fast-moving, and human. In this piece, I share why Hexa doesn't look or feel like a traditional CRM — and why we believe that's exactly what modern teams need."
    ],
    sections: [
      {
        id: "assumption",
        title: "The assumption we started with",
        content: [
          "When we started building Hexa, we weren't just trying to 'make CRM better.' We were trying to question whether CRM, as it exists today, even makes sense anymore.",
          "We questioned why sales tools feel heavy and slow.",
          "So the question became What would a sales platform look like if it was built for the rep first — not the dashboard?"
        ]
      },
      {
        id: "broken",
        title: "Why CRMs became broken",
        content: [
          "Legacy CRMs were never really designed for the rep — they were built for management. They serve reporting, not reality. They're full of:"
        ],
        list: [
          "Static fields that reps don't update",
          "Deal stages that mean different things to different people",
          "Notes that no one reads",
          "Pipelines that feel like spreadsheets with prettier fonts"
        ],
      },
      {
        id: "different",
        title: "What we're doing differently",
        content: [
          "Hexa is built with one idea at its core: context over control.",
          "We don't want to control reps. We want to capture what actually happened — and turn it into structure that helps them move forward. That's why:"
        ],
        list: [
          "Every call summary is auto-generated and tagged",
          "Follow-ups draft themselves from conversation",
          "Deal rooms act like shared spaces, not just static records",
          "Nudges come based on signal, not timers",
          "Managers get clarity without asking for updates"
        ],
      },
      {
        id: "next",
        title: "What's next",
        content: [
          "We're not stopping at AI summaries. We're building toward a CRM that disappears into the workflow: one that knows when to speak up, when to stay out of the way, and when to remind you what matters.",
          "Hexa isn't trying to be Salesforce with a nicer skin. It's trying to be the tool that makes sales feel like sales again."
        ]
      },
      {
        id: "final",
        title: "Final Thought",
        content: [
          "CRMs shouldn't just capture data — they should create leverage. If your CRM isn't helping you sell, it's helping you stall."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Your AI Is Only as Smart as Your Data",
    category: "Sales Playbook",
    readTime: "7 mins read",
    author: "Jenna Marks",
    date: "Jul 7, 2025",
    image: "/images/blog-img/card4.jpg",
    summary: [
      "CRMs were built for a version of sales that no longer exists: static, repetitive, manager-driven. Today's sales workflows are async, fast-moving, and human. In this piece, I share why Hexa doesn't look or feel like a traditional CRM — and why we believe that's exactly what modern teams need."
    ],
    sections: [
      {
        id: "assumption",
        title: "The assumption we started with",
        content: [
          "When we started building Hexa, we weren't just trying to 'make CRM better.' We were trying to question whether CRM, as it exists today, even makes sense anymore.",
          "We questioned why sales tools feel heavy and slow.",
          "So the question became What would a sales platform look like if it was built for the rep first — not the dashboard?"
        ]
      },
      {
        id: "broken",
        title: "Why CRMs became broken",
        content: [
          "Legacy CRMs were never really designed for the rep — they were built for management. They serve reporting, not reality. They're full of:"
        ],
        list: [
          "Static fields that reps don't update",
          "Deal stages that mean different things to different people",
          "Notes that no one reads",
          "Pipelines that feel like spreadsheets with prettier fonts"
        ],
      },
      {
        id: "different",
        title: "What we're doing differently",
        content: [
          "Hexa is built with one idea at its core: context over control.",
          "We don't want to control reps. We want to capture what actually happened — and turn it into structure that helps them move forward. That's why:"
        ],
        list: [
          "Every call summary is auto-generated and tagged",
          "Follow-ups draft themselves from conversation",
          "Deal rooms act like shared spaces, not just static records",
          "Nudges come based on signal, not timers",
          "Managers get clarity without asking for updates"
        ],
      },
      {
        id: "next",
        title: "What's next",
        content: [
          "We're not stopping at AI summaries. We're building toward a CRM that disappears into the workflow: one that knows when to speak up, when to stay out of the way, and when to remind you what matters.",
          "Hexa isn't trying to be Salesforce with a nicer skin. It's trying to be the tool that makes sales feel like sales again."
        ]
      },
      {
        id: "final",
        title: "Final Thought",
        content: [
          "CRMs shouldn't just capture data — they should create leverage. If your CRM isn't helping you sell, it's helping you stall."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "The Cost of Complexity: Why Simple Wins",
    category: "Founder Insights",
    readTime: "5 mins read",
    author: "Jenna Marks",
    date: "Jul 6, 2025",
    image: "/images/blog-img/card5.jpg",
    summary: [
      "CRMs were built for a version of sales that no longer exists: static, repetitive, manager-driven. Today's sales workflows are async, fast-moving, and human. In this piece, I share why Hexa doesn't look or feel like a traditional CRM — and why we believe that's exactly what modern teams need."
    ],
    sections: [
      {
        id: "assumption",
        title: "The assumption we started with",
        content: [
          "When we started building Hexa, we weren't just trying to 'make CRM better.' We were trying to question whether CRM, as it exists today, even makes sense anymore.",
          "We questioned why sales tools feel heavy and slow.",
          "So the question became What would a sales platform look like if it was built for the rep first — not the dashboard?"
        ]
      },
      {
        id: "broken",
        title: "Why CRMs became broken",
        content: [
          "Legacy CRMs were never really designed for the rep — they were built for management. They serve reporting, not reality. They're full of:"
        ],
        list: [
          "Static fields that reps don't update",
          "Deal stages that mean different things to different people",
          "Notes that no one reads",
          "Pipelines that feel like spreadsheets with prettier fonts"
        ],
      },
      {
        id: "different",
        title: "What we're doing differently",
        content: [
          "Hexa is built with one idea at its core: context over control.",
          "We don't want to control reps. We want to capture what actually happened — and turn it into structure that helps them move forward. That's why:"
        ],
        list: [
          "Every call summary is auto-generated and tagged",
          "Follow-ups draft themselves from conversation",
          "Deal rooms act like shared spaces, not just static records",
          "Nudges come based on signal, not timers",
          "Managers get clarity without asking for updates"
        ],
      },
      {
        id: "next",
        title: "What's next",
        content: [
          "We're not stopping at AI summaries. We're building toward a CRM that disappears into the workflow: one that knows when to speak up, when to stay out of the way, and when to remind you what matters.",
          "Hexa isn't trying to be Salesforce with a nicer skin. It's trying to be the tool that makes sales feel like sales again."
        ]
      },
      {
        id: "final",
        title: "Final Thought",
        content: [
          "CRMs shouldn't just capture data — they should create leverage. If your CRM isn't helping you sell, it's helping you stall."
        ]
      }
    ]
  },
  {
    id: 6,
    title: "What AI Can — and Can't — Do for Sales Teams",
    category: "AI & Workflow",
    readTime: "8 mins read",
    author: "Mei Tan",
    date: "Jul 5, 2025",
    image: "/images/blog-img/card6.jpg",
    summary: [
      "CRMs were built for a version of sales that no longer exists: static, repetitive, manager-driven. Today's sales workflows are async, fast-moving, and human. In this piece, I share why Hexa doesn't look or feel like a traditional CRM — and why we believe that's exactly what modern teams need."
    ],
    sections: [
      {
        id: "assumption",
        title: "The assumption we started with",
        content: [
          "When we started building Hexa, we weren't just trying to 'make CRM better.' We were trying to question whether CRM, as it exists today, even makes sense anymore.",
          "We questioned why sales tools feel heavy and slow.",
          "So the question became What would a sales platform look like if it was built for the rep first — not the dashboard?"
        ]
      },
      {
        id: "broken",
        title: "Why CRMs became broken",
        content: [
          "Legacy CRMs were never really designed for the rep — they were built for management. They serve reporting, not reality. They're full of:"
        ],
        list: [
          "Static fields that reps don't update",
          "Deal stages that mean different things to different people",
          "Notes that no one reads",
          "Pipelines that feel like spreadsheets with prettier fonts"
        ],
      },
      {
        id: "different",
        title: "What we're doing differently",
        content: [
          "Hexa is built with one idea at its core: context over control.",
          "We don't want to control reps. We want to capture what actually happened — and turn it into structure that helps them move forward. That's why:"
        ],
        list: [
          "Every call summary is auto-generated and tagged",
          "Follow-ups draft themselves from conversation",
          "Deal rooms act like shared spaces, not just static records",
          "Nudges come based on signal, not timers",
          "Managers get clarity without asking for updates"
        ],
      },
      {
        id: "next",
        title: "What's next",
        content: [
          "We're not stopping at AI summaries. We're building toward a CRM that disappears into the workflow: one that knows when to speak up, when to stay out of the way, and when to remind you what matters.",
          "Hexa isn't trying to be Salesforce with a nicer skin. It's trying to be the tool that makes sales feel like sales again."
        ]
      },
      {
        id: "final",
        title: "Final Thought",
        content: [
          "CRMs shouldn't just capture data — they should create leverage. If your CRM isn't helping you sell, it's helping you stall."
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Fast, Flexible Role-Based Access in the UI",
    category: "Engineering",
    readTime: "6 mins read",
    author: "Taylor Nguyen",
    date: "Jul 4, 2025",
    image: "/images/blog-img/card7.jpg",
    summary: [
      "CRMs were built for a version of sales that no longer exists: static, repetitive, manager-driven. Today's sales workflows are async, fast-moving, and human. In this piece, I share why Hexa doesn't look or feel like a traditional CRM — and why we believe that's exactly what modern teams need."
    ],
    sections: [
      {
        id: "assumption",
        title: "The assumption we started with",
        content: [
          "When we started building Hexa, we weren't just trying to 'make CRM better.' We were trying to question whether CRM, as it exists today, even makes sense anymore.",
          "We questioned why sales tools feel heavy and slow.",
          "So the question became What would a sales platform look like if it was built for the rep first — not the dashboard?"
        ]
      },
      {
        id: "broken",
        title: "Why CRMs became broken",
        content: [
          "Legacy CRMs were never really designed for the rep — they were built for management. They serve reporting, not reality. They're full of:"
        ],
        list: [
          "Static fields that reps don't update",
          "Deal stages that mean different things to different people",
          "Notes that no one reads",
          "Pipelines that feel like spreadsheets with prettier fonts"
        ],
      },
      {
        id: "different",
        title: "What we're doing differently",
        content: [
          "Hexa is built with one idea at its core: context over control.",
          "We don't want to control reps. We want to capture what actually happened — and turn it into structure that helps them move forward. That's why:"
        ],
        list: [
          "Every call summary is auto-generated and tagged",
          "Follow-ups draft themselves from conversation",
          "Deal rooms act like shared spaces, not just static records",
          "Nudges come based on signal, not timers",
          "Managers get clarity without asking for updates"
        ],
      },
      {
        id: "next",
        title: "What's next",
        content: [
          "We're not stopping at AI summaries. We're building toward a CRM that disappears into the workflow: one that knows when to speak up, when to stay out of the way, and when to remind you what matters.",
          "Hexa isn't trying to be Salesforce with a nicer skin. It's trying to be the tool that makes sales feel like sales again."
        ]
      },
      {
        id: "final",
        title: "Final Thought",
        content: [
          "CRMs shouldn't just capture data — they should create leverage. If your CRM isn't helping you sell, it's helping you stall."
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Smart Summaries Without Full Transcription",
    category: "Founder Insights",
    readTime: "9 mins read",
    author: "Mei Tan",
    date: "Jul 3, 2025",
    image: "/images/blog-img/card8.jpg",
    summary: [
      "CRMs were built for a version of sales that no longer exists: static, repetitive, manager-driven. Today's sales workflows are async, fast-moving, and human. In this piece, I share why Hexa doesn't look or feel like a traditional CRM — and why we believe that's exactly what modern teams need."
    ],
    sections: [
      {
        id: "assumption",
        title: "The assumption we started with",
        content: [
          "When we started building Hexa, we weren't just trying to 'make CRM better.' We were trying to question whether CRM, as it exists today, even makes sense anymore.",
          "We questioned why sales tools feel heavy and slow.",
          "So the question became What would a sales platform look like if it was built for the rep first — not the dashboard?"
        ]
      },
      {
        id: "broken",
        title: "Why CRMs became broken",
        content: [
          "Legacy CRMs were never really designed for the rep — they were built for management. They serve reporting, not reality. They're full of:"
        ],
        list: [
          "Static fields that reps don't update",
          "Deal stages that mean different things to different people",
          "Notes that no one reads",
          "Pipelines that feel like spreadsheets with prettier fonts"
        ],
      },
      {
        id: "different",
        title: "What we're doing differently",
        content: [
          "Hexa is built with one idea at its core: context over control.",
          "We don't want to control reps. We want to capture what actually happened — and turn it into structure that helps them move forward. That's why:"
        ],
        list: [
          "Every call summary is auto-generated and tagged",
          "Follow-ups draft themselves from conversation",
          "Deal rooms act like shared spaces, not just static records",
          "Nudges come based on signal, not timers",
          "Managers get clarity without asking for updates"
        ],
      },
      {
        id: "next",
        title: "What's next",
        content: [
          "We're not stopping at AI summaries. We're building toward a CRM that disappears into the workflow: one that knows when to speak up, when to stay out of the way, and when to remind you what matters.",
          "Hexa isn't trying to be Salesforce with a nicer skin. It's trying to be the tool that makes sales feel like sales again."
        ]
      },
      {
        id: "final",
        title: "Final Thought",
        content: [
          "CRMs shouldn't just capture data — they should create leverage. If your CRM isn't helping you sell, it's helping you stall."
        ]
      }
    ]
  },
  {
    id: 9,
    title: "How to Add AI Without Breaking Your Workflow",
    category: "Sales Playbook",
    readTime: "7 mins read",
    author: "Jenna Marks",
    date: "Jul 2, 2025",
    image: "/images/blog-img/card9.jpg",
    summary: [
      "CRMs were built for a version of sales that no longer exists: static, repetitive, manager-driven. Today's sales workflows are async, fast-moving, and human. In this piece, I share why Hexa doesn't look or feel like a traditional CRM — and why we believe that's exactly what modern teams need."
    ],
    sections: [
      {
        id: "assumption",
        title: "The assumption we started with",
        content: [
          "When we started building Hexa, we weren't just trying to 'make CRM better.' We were trying to question whether CRM, as it exists today, even makes sense anymore.",
          "We questioned why sales tools feel heavy and slow.",
          "So the question became What would a sales platform look like if it was built for the rep first — not the dashboard?"
        ]
      },
      {
        id: "broken",
        title: "Why CRMs became broken",
        content: [
          "Legacy CRMs were never really designed for the rep — they were built for management. They serve reporting, not reality. They're full of:"
        ],
        list: [
          "Static fields that reps don't update",
          "Deal stages that mean different things to different people",
          "Notes that no one reads",
          "Pipelines that feel like spreadsheets with prettier fonts"
        ],
      },
      {
        id: "different",
        title: "What we're doing differently",
        content: [
          "Hexa is built with one idea at its core: context over control.",
          "We don't want to control reps. We want to capture what actually happened — and turn it into structure that helps them move forward. That's why:"
        ],
        list: [
          "Every call summary is auto-generated and tagged",
          "Follow-ups draft themselves from conversation",
          "Deal rooms act like shared spaces, not just static records",
          "Nudges come based on signal, not timers",
          "Managers get clarity without asking for updates"
        ],
      },
      {
        id: "next",
        title: "What's next",
        content: [
          "We're not stopping at AI summaries. We're building toward a CRM that disappears into the workflow: one that knows when to speak up, when to stay out of the way, and when to remind you what matters.",
          "Hexa isn't trying to be Salesforce with a nicer skin. It's trying to be the tool that makes sales feel like sales again."
        ]
      },
      {
        id: "final",
        title: "Final Thought",
        content: [
          "CRMs shouldn't just capture data — they should create leverage. If your CRM isn't helping you sell, it's helping you stall."
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Why Fast, Then Right Is How We Build at Hexa",
    category: "Founder Insights",
    readTime: "5 mins read",
    author: "Jenna Marks",
    date: "Jul 1, 2025",
    image: "/images/blog-img/card10.jpg",
    summary: [
      "CRMs were built for a version of sales that no longer exists: static, repetitive, manager-driven. Today's sales workflows are async, fast-moving, and human. In this piece, I share why Hexa doesn't look or feel like a traditional CRM — and why we believe that's exactly what modern teams need."
    ],
    sections: [
      {
        id: "assumption",
        title: "The assumption we started with",
        content: [
          "When we started building Hexa, we weren't just trying to 'make CRM better.' We were trying to question whether CRM, as it exists today, even makes sense anymore.",
          "We questioned why sales tools feel heavy and slow.",
          "So the question became What would a sales platform look like if it was built for the rep first — not the dashboard?"
        ]
      },
      {
        id: "broken",
        title: "Why CRMs became broken",
        content: [
          "Legacy CRMs were never really designed for the rep — they were built for management. They serve reporting, not reality. They're full of:"
        ],
        list: [
          "Static fields that reps don't update",
          "Deal stages that mean different things to different people",
          "Notes that no one reads",
          "Pipelines that feel like spreadsheets with prettier fonts"
        ],
      },
      {
        id: "different",
        title: "What we're doing differently",
        content: [
          "Hexa is built with one idea at its core: context over control.",
          "We don't want to control reps. We want to capture what actually happened — and turn it into structure that helps them move forward. That's why:"
        ],
        list: [
          "Every call summary is auto-generated and tagged",
          "Follow-ups draft themselves from conversation",
          "Deal rooms act like shared spaces, not just static records",
          "Nudges come based on signal, not timers",
          "Managers get clarity without asking for updates"
        ],
      },
      {
        id: "next",
        title: "What's next",
        content: [
          "We're not stopping at AI summaries. We're building toward a CRM that disappears into the workflow: one that knows when to speak up, when to stay out of the way, and when to remind you what matters.",
          "Hexa isn't trying to be Salesforce with a nicer skin. It's trying to be the tool that makes sales feel like sales again."
        ]
      },
      {
        id: "final",
        title: "Final Thought",
        content: [
          "CRMs shouldn't just capture data — they should create leverage. If your CRM isn't helping you sell, it's helping you stall."
        ]
      }
    ]
  },
];

function BlogViewContent() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  const post = blogPosts.find((blog) => blog.id === id);
  const [activeId, setActiveId] = useState("");

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--color-20)]">
        Blog not found
      </div>
    );
  }

  useEffect(() => {
    if (!post?.sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    post.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [post]);

  const relatedPosts = blogPosts.filter(
    (item) => item.category === post.category && item.id !== post.id
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Founder Insights": return "text-[var(--color-9)]";
      case "Sales Playbook": return "text-[var(--color-9)]";
      case "AI & Workflow": return "text-[var(--color-9)]";
      case "Engineering": return "text-[var(--color-9)]";
      default: return "text-[var(--color-9)]";
    }
  };

  return (
    <main className="bg-[var(--color-2)]">
      {/* SECTION 1 */}
      <section className="pt-25 pb-32 lg:px-22">
        <div className="max-w-6xl mx-auto px-6 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
            <div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-[var(--color-26)] bg-[var(--color-25)] text-m font-medium text-[var(--color-18)] hover:bg-[var(--color-13)] hover:text-[var(--color-15)] transition-all duration-200"
              >
                <span className="flex items-center justify-center h-6 w-6 rounded-full">
                  <ArrowLeft size={14} />
                </span>
                All posts
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-m font-medium text-[var(--color-9)]">
                  {post.category}
                </span>
                <span className="text-[var(--color-20)]">•</span>
                <span className="text-sm text-[var(--color-20)]">
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-8xl xl:text-6xl font-medium text-[var(--color-15)] leading-tight mb-10 mt-10">
                {post.title}
              </h1>

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/author-img/author1.jpg"
                    alt={post.author}
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-[var(--color-17)]">
                    {post.author}
                  </span>
                  <span className="text-[var(--color-20)]">•</span>
                  <span className="text-[var(--color-20)]">
                    {post.date}
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative h-[280px] md:h-[320px] lg:h-[460px]"
            >
              <div className="h-full w-full rounded-2xl border border-[var(--color-21)] p-[2px]">
                <div className="h-full w-full rounded-xl bg-[var(--color-2)] p-[6px]">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative h-full w-full overflow-hidden rounded-lg"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="pb-32 bg-[var(--color-25)] pt-15">
        <div className="max-w-6xl mx-auto px-6 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">
            <div>
              {post.summary && (
                <div className="mb-20 rounded-2xl border border-[var(--color-21)] bg-[var(--color-2)] p-8 max-w-[700px] w-full">
                  <h3 className="text-lg font-medium mb-4">
                    <span className="bg-[var(--color-13)] text-[var(--color-9)] px-3 py-2 rounded-lg inline-flex items-center gap-2">
                      <GamepadDirectional size={16} className="text-[var(--color-9)]" />
                      Summary
                    </span>
                  </h3>

                  <div className="space-y-4 text-m leading-relaxed text-[var(--color-20)]">
                    {post.summary.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-15">
                {post.sections?.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-32"
                  >
                    <h2 className="text-4xl font-medium text-[var(--color-15)] mb-6">
                      {section.title}
                    </h2>

                    <div className="space-y-4 text-[var(--color-20)] leading-relaxed">
                      {section.content?.map((para, index) => (
                        <p key={index}>{para}</p>
                      ))}
                    </div>

                    {section.list && (
                      <ul className="mt-6 space-y-3 list-disc pl-6 text-[var(--color-20)]">
                        {section.list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </div>

            {/* SCROLLSPY */}
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <h4 className="text-sm font-medium text-[var(--color-15)] mb-6">
                  Jump to
                </h4>

                <ul className="space-y-1">
                  {post.sections?.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`block text-sm transition-colors ${activeId === section.id
                          ? "text-[var(--color-9)] font-medium"
                          : "text-[var(--color-20)] hover:text-[var(--color-9)]"
                          }`}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="border-b border-[var(--color-21)] mt-4"></div>
                <div className="flex flex-col mt-7 gap-3">
                  <span className="text-m font-medium text-[var(--color-15)] tracking-wide">
                    Share Article
                  </span>

                  <div className="flex items-center gap-3">
                    {/* Twitter */}
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="text-[var(--color-20)] hover:text-[var(--color-9)] transition-colors"
                      >
                        <path d="M22 4.01c-.77.34-1.6.57-2.46.67a4.26 4.26 0 001.88-2.36c-.82.5-1.73.86-2.7 1.05a4.25 4.25 0 00-7.25 3.87A12.05 12.05 0 013 3.1a4.25 4.25 0 001.31 5.67 4.23 4.23 0 01-1.93-.53v.05a4.25 4.25 0 003.41 4.16 4.28 4.28 0 01-1.92.07 4.25 4.25 0 003.97 2.95 8.53 8.53 0 01-5.3 1.82A8.7 8.7 0 012 19.54a12.07 12.07 0 006.54 1.92c7.84 0 12.13-6.5 12.13-12.13 0-.18 0-.35-.01-.53A8.66 8.66 0 0022 4.01z" />
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="text-[var(--color-20)] hover:text-[var(--color-9)] transition-colors"
                      >
                        <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.878C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                        className="text-[var(--color-20)] hover:text-[var(--color-9)] transition-colors"
                      >
                        <path d="M4.98 3.5C3.34 3.5 2 4.83 2 6.5s1.34 3 2.98 3c1.64 0 2.98-1.34 2.98-3S6.62 3.5 4.98 3.5zM2.4 21h5.16V9H2.4v12zM9.86 9v12h5.16v-6.51c0-1.55.03-3.55 2.17-3.55 2.18 0 2.2 1.87 2.2 3.63V21h5.16v-7.48c0-4-2.13-5.86-4.97-5.86-2.32 0-3.36 1.29-3.93 2.19h.03V9h-5.16z" />
                      </svg>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                        className="text-[var(--color-20)] hover:text-[var(--color-9)] transition-colors"
                      >
                        <path d="M20.52 3.48A11.95 11.95 0 0012 0C5.37 0 0 5.37 0 12a11.97 11.97 0 001.65 6.12L0 24l5.96-1.56A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.18-3.48-8.52zm-8.52 17.44c-2.04 0-4.03-.53-5.78-1.53l-.41-.25-3.53.93.95-3.44-.27-.44A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.29-7.12c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.19.28-.72.91-.88 1.1-.16.19-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.19-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.16 0-.35 0-.54 0-.19 0-.49.07-.75.35-.26.28-1 1-.98 2.44.02 1.44 1.03 2.84 1.17 3.04.14.19 2.02 3.1 4.9 4.34.68.29 1.21.46 1.63.59.68.21 1.3.18 1.79.11.55-.08 1.66-.68 1.89-1.33.23-.64.23-1.19.16-1.32-.07-.14-.26-.19-.54-.33z" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                        width="30"
                        height="30"
                        className="text-[var(--color-20)] hover:text-[var(--color-9)] transition-colors"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 190.6c-41.9 0-75.7-33.8-75.7-75.7s33.8-75.7 75.7-75.7 75.7 33.8 75.7 75.7-33.8 75.7-75.7 75.7zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-.1-54.2-44.1-98.1-98.3-98.2H101.9C47.7 66.1 3.7 110 3.6 164.2v182.7c.1 54.2 44.1 98.1 98.3 98.2h246.3c54.2-.1 98.2-44 98.3-98.2V164.2zM398.8 346c0 30.9-25.1 56-56 56H105.2c-30.9 0-56-25.1-56-56V166c0-30.9 25.1-56 56-56h237.6c30.9 0 56 25.1 56 56v180z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-32 bg-[var(--color-2)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[var(--color-13)] text-[var(--color-9)] text-[14.5px] font-medium tracking-wide mb-6">
              <BookOpen size={16} />
              Related Reads
            </div>
          </div>

          <h2 className="text-center text-4xl md:text-5xl font-medium text-[var(--color-15)] mb-6">
            More in{" "}
            <span className="text-[var(--color-20)]">
              {post.category}
            </span>
          </h2>

          <p className="text-center max-w-xl mx-auto text-[var(--color-20)] mb-20 leading-relaxed">
            Explore more articles from this category.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <Link
                  href={`/blog/blog-view?id=${relatedPost.id}`}
                  className="block h-full"
                >
                  <div className="group cursor-pointer h-full rounded-2xl hover:shadow-xl transition-all duration-300 bg-[var(--color-2)] hover:bg-[var(--color-25)] flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 md:h-56 overflow-hidden rounded-lg p-[1px] bg-[var(--color-gray-300)]">
                      <motion.div
                        className="relative h-full w-full"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg border-4 border-white"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`py-1 font-medium ${getCategoryColor(relatedPost.category)}`}>
                          {relatedPost.category}
                        </span>
                        <span className="text-[var(--color-20)]">•</span>
                        <span className="text-sm text-[var(--color-20)] font-medium">
                          {relatedPost.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[var(--color-15)] mb-3 group-hover:text-[var(--color-17)] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>

                      <div className="flex items-center gap-3 pt-4 mt-auto">
                        <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0 relative">
                          <Image
                            src="/images/author-img/author1.jpg"
                            alt={relatedPost.author}
                            fill
                            className="object-cover"
                            sizes="32px"
                          />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-[var(--color-18)] whitespace-nowrap">
                            {relatedPost.author}
                          </span>
                          <span className="text-[var(--color-20)]">•</span>
                          <span className="text-xs text-[var(--color-20)] whitespace-nowrap">
                            {relatedPost.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function BlogViewPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogViewContent />
    </Suspense>
  );
}