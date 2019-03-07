const AVAILABLE = 0;
const UNAVAILABLE = 1;
const WITHHELD = 2;
const SCHOOL = 3;

// Projects sorted by date descending
const PROJECTS = [

    // Newer -----------------------------------------------------------------------------------------------------------

    {
        title: "TaskPlanner",
        date: "2018 - Present",
        description: "A web application and entrepreneurial venture. It is available as a free way to organize your to-do's or class assignments; built by students, for students. The website's stack includes an API based on Express, running on Node.JS and a frontend based on React and Nginx. Source withheld as proprietary.",
        source: WITHHELD,
        category: "Personal",
        language: "Javascript",
        buttons: [
            {
                name: "Website",
                link: "https://taskplanner.io"
            }
        ],
        tags: [
            "Web",
            "Javascript",
            "React",
            "Express",
            "Node",
            "Nginx"
        ]
    },
    {
        title: "M20 Assembly",
        date: "2018 - Present",
        description: "A custom instruction set architecture, assembler, linker, and simulator. The purpose of the project was to gain further insight into operating systems and low-level processor principles. The fictional processor and architecture is based on a 32-bit ARM design.",
        source: AVAILABLE,
        category: "Personal",
        language: "C++",
        buttons: [
            {
                name: "Github",
                link: "https://github.com/msedwar/m20-assembly"
            }
        ],
        tags: [
            "Compiler",
            "Assembler",
            "Linker",
            "Simulation",
            "C++",
            "Instruction Set"
        ]
    },
    {
        title: "MLint",
        date: "2018 - Present",
        description: "MLint is a code linter for C++. It is written in Python and based on Google's <a href=\"https://github.com/google/styleguide/tree/gh-pages/cpplint\" target=\"_blank\">cpplint</a> project.",
        source: AVAILABLE,
        category: "Personal",
        language: "Python",
        buttons: [
            {
                name: "Github",
                link: "https://github.com/msedwar/mlint"
            }
        ],
        tags: [
            "Inspection",
            "Tool",
            "Python"
        ]
    },
    {
        title: "Personal Website",
        date: "2018 - Present",
        description: "The website you are looking at! Originally created to showcase personal and school projects, occasionally used as a playground to test static website techniques I come across.<br /><br />The website currently uses jQuery and Bootstrap, but all other assets, styles, and code are created by me.",
        source: AVAILABLE,
        category: "Personal",
        language: "Javascript",
        buttons: [
            {
                name: "Website",
                link: "index.html"
            },
            {
                name: "Github",
                link: "https://github.com/msedwar/msedwar.github.io"
            }
        ],
        tags: [
            "Website",
            "HTML",
            "CSS",
            "Javascript",
            "jQuery",
            "Bootstrap"
        ]
    },
    {
        title: "Disk Scheduler",
        date: "Winter 2018",
        description: "A somewhat simple concurrent program that receives, schedules, and services disk requests using a provided library.<br /><br />This was the first project in EECS 482: Introduction to Operating Systems. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 482",
        language: "C++",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 482",
            "Multithreading",
            "C++"
        ]
    },
    {
        title: "Git Workflow Scripts",
        date: "Winter 2018",
        description: "A collection of Bash scripts, Makefiles, and git-hooks to improve my own workflow (with a focus on C++).",
        source: UNAVAILABLE,
        category: "Personal",
        language: "Shell",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            }
        ],
        tags: [
            "Git",
            "Bash",
            "Python",
            "Workflow"
        ]
    },

    // School ----------------------------------------------------------------------------------------------------------

    {
        title: "Dungeon of the Necromancer",
        date: "Winter 2019",
        description: "A custom, rapidly-prototyped video game. You are a brave knight sent to slay a demon that has been terrorizing a town. Explore and fight your way through a procedurally-generated dungeon.<br /><br />This was the second project in EECS 494: Introduction to Game Development. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 494",
        language: "C#",
        buttons: [
            {
                name: "Play Web Version",
                link: "http://www-personal.umich.edu/~msedwar/eecs494/Dungeon"
            },
            {
                name: "Desktop Downloads",
                link: "http://www-personal.umich.edu/~msedwar/eecs494/builds/dungeon/"
            },
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 494",
            "Video Game",
            "Procedural Generation",
            "Unity",
            "C-Sharp",
            "C#"
        ]
    },
    {
        title: "Legend of Zelda",
        date: "Winter 2019",
        description: "A recreation of the first dungeon in the original Legend of Zelda game for the Nintendo Entertainment System (NES). This project also required implementation of a custom mechanic for the clone.<br /><br />This was the first project in EECS 494: Introduction to Game Development. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 494",
        language: "C#",
        buttons: [
            {
                name: "Play Web Version",
                link: "http://www-personal.umich.edu/~msedwar/LoZ"
            },
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 494",
            "Video Game",
            "Legend of Zelda",
            "Unity",
            "C-Sharp",
            "C#"
        ]
    },
    {
        title: "Super Flappy Bird",
        date: "Winter 2019",
        description: "EECS 494 is the only game development course at the University of Michigan, and thus demands a quick ramp-up of Unity skills and experience. This project required:<br />" +
        "<ul><li>Establishing basic familiarity and experience with the Unity game engine.</li>" +
        "<li>Introducing the component design pattern</li>" +
        "<li>Introducing new mechanics to the tutorial game</li></ul>" +
        "<br /><br />This was the second tutorial project in EECS 494: Introduction to Game Development. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 494",
        language: "C#",
        buttons: [
            {
                name: "Play Web Version",
                link: "http://www-personal.umich.edu/~msedwar/eecs494/SuperFlappyBird"
            },
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 494",
            "Video Game",
            "Flappy Bird",
            "Unity",
            "C-Sharp",
            "C#"
        ]
    },
    {
        title: "Roll-A-Ball",
        date: "Winter 2019",
        description: "EECS 494 is the only game development course at the University of Michigan, and thus demands a quick ramp-up of Unity skills and experience. This project required:<br />" +
        "<ul><li>Establishing basic familiarity and experience with the Unity game engine.</li>" +
        "<li>Introducing the component design pattern</li>" +
        "<li>Introducing new mechanics to the tutorial game</li></ul>" +
        "<br /><br />This was the first tutorial project in EECS 494: Introduction to Game Development. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 494",
        language: "C#",
        buttons: [
            {
                name: "Play Web Version",
                link: "http://www-personal.umich.edu/~msedwar/eecs494/RollABall"
            },
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 494",
            "Video Game",
            "Unity",
            "C-Sharp",
            "C#"
        ]
    },
    {
        title: "Roll-A-Ball",
        date: "Winter 2019",
        description: "EECS 494 is the only game development course at the University of Michigan, and thus demands a quick ramp-up of Unity skills and experience. This project required:<br />" +
        "<ul><li>Establishing basic familiarity and experience with the Unity game engine.</li>" +
        "<li>Introducing the component design pattern</li>" +
        "<li>Introducing new mechanics to the tutorial game</li></ul>" +
        "<br /><br />This was the tutorial project in EECS 494: Introduction to Game Development. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 494",
        language: "C#",
        buttons: [
            {
                name: "Play Web Version",
                link: "http://www-personal.umich.edu/~msedwar/eecs494/RollABall"
            },
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 494",
            "Video Game",
            "Unity",
            "C-Sharp",
            "C#"
        ]
    },
    {
        title: "Brew-Hob",
        date: "Fall 2018",
        description: "Designed and implemented an automated vending machine that could detect, retreive, and serve the coldest drink can available. I was in a team of 4 for this class term project. The hardware was controlled via a SmartFusion microcontroller, and included hardware such as HXD8357D Touchscreen, analog temperature sensors, TCS34725 RGBA color sensor, stepper motors, and an N64 video game console controller. Many drivers were written by hand based on hardware specifications, a graphics library was ported by hand in order to execute on the processor we used, and a small, lightweight RTOS was written to handle the appliance's main application and its external devices. This project used a mixture of C, ARM Assembly, and Verilog.<br /><br />This was the term project in EECS 373: Introduction to Embedded Systems. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 373",
        language: "C",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 373",
            "Embedded Systems",
            "C",
            "ARM Assembly",
            "Verilog"
        ]
    },
    {
        title: "Network File Server",
        date: "Winter 2018",
        description: "Designed and implemented a multi-threaded, secure network file server. Clients that use the file server can interact with it via network messages. This project required understanding of hierarchical file systems, socket programming, client-server systems, remote code execution, and security protocols.<br /><br />This was the fourth project in EECS 482: Introduction to Operating Systems. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 482",
        language: "C++",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 482",
            "Operating Systems",
            "Networking",
            "Server",
            "Multithreaded",
            "Security",
            "C++"
        ]
    },
    {
        title: "Memory Pager",
        date: "Winter 2018",
        description: "Designed and implemented a memory pager, which is the part of the kernel that manages application processes' virtual address spaces. Pages are stored in physical memory, in a swap file, or in a regular file. The pager manages these resources on behalf of all the applications it manages.<br /><br />This was the third project in EECS 482: Introduction to Operating Systems. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 482",
        language: "C++",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 482",
            "Operating Systems",
            "Paging",
            "Virtual Memory",
            "Multithreaded",
            "C++"
        ]
    },
    {
        title: "Threading Library",
        date: "Winter 2018",
        description: "A threading library that balances workloads across multiple CPUs. Included implementation of basic multithreaded interfaces like threads, mutexes, and condition variables.<br /><br />This was the second project in EECS 482: Introduction to Operating Systems. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 482",
        language: "C++",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 482",
            "Operating Systems",
            "Threading",
            "Library",
            "Multithreaded",
            "C++"
        ]
    },
    {
        title: "Disk Scheduler",
        date: "Winter 2018",
        description: "A concurrent, multithreaded program that issues and services disk requests.<br /><br />This was the first project in EECS 482: Introduction to Operating Systems. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 482",
        language: "C++",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 482",
            "Operating Systems",
            "Disk Scheduling",
            "Multithreaded",
            "C++"
        ]
    },
    {
        title: "Sensor and Servo Interfacing",
        date: "Winter 2018",
        description: "Designed, developed, and implemented a sequential digital circuit whose purpose was to interface with actual hardware devices. Wrote Verilog hardware descriptions for interfaces into an Ultrasonic sensor and servo. Finally, these interfaces were combined and run on hardware to create a device which would focus on the nearest object.<br /><br />This was the seventh lab in EECS 270: Introduction to Logic Design. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 270",
        language: "Verilog",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 270",
            "Logic Design",
            "Servo",
            "Verilog"
        ]
    },
    {
        title: "Traffic Light Controller",
        date: "Winter 2018",
        description: "Designed and implemented a state machine in hardware that controls a set of traffic lights.<br /><br />This was the sixth lab in EECS 270: Introduction to Logic Design. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 270",
        language: "Verilog",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 270",
            "Logic Design",
            "Controller",
            "Verilog"
        ]
    },
    {
        title: "Binary Exploitation",
        date: "Fall 2017",
        description: "This project introduced control-flow hijacking vulnerabilities in application software, including buffer overflows. Given a series of vulnerable programs and a virtual machine environment, I had to develop binary exploits. This involved the use of decompilers and debuggers like GDB.<br /><br />This was the fourth project in EECS 388: Introduction to Computer Security. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 388",
        language: "Python",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 388",
            "Security",
            "Binary Exploitation",
            "Python"
        ]
    },
    {
        title: "Penetration Testing",
        date: "Fall 2017",
        description: "An insecure router and website were provided and we were required to perform a penetration test. This included network packet capture, brute force password cracking, and remote SSH entry.<br /><br />This was the third project in EECS 388: Introduction to Computer Security. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 388",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 388",
            "Security"
        ]
    },
    {
        title: "Web Security",
        date: "Fall 2017",
        description: "Given the provided insecure website, I was required to attack the website by exploiting three common classes of vulnerabilities: SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF). I was also required to exploit these problems with various flawed defenses in place. Understanding how these attacks work will help to better defend web applications.<br /><br />This was the second project in EECS 388: Introduction to Computer Security. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 388",
        language: "Javascript",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 388",
            "Security",
            "Web",
            "SQL",
            "Javascript"
        ]
    },
    {
        title: "Cryptographic Attacks",
        date: "Fall 2017",
        description: "This project included investigation of vulnerabilities in widely used cryptographic hash functions, including length-extension attacks and collision vulnerabilities, and an implementation vulnerability in a popular digital signature scheme. Part 1 included attacking the authentication capability of an imaginary server API. The attack will exploit the length-extension vulnerability of hash functions in the MD5 and SHA family. Part 2 required use a cutting-edge tool to generate different messages with the same MD5 hash value (collisions). Part 3 then investigated how that capability can be exploited to conceal malicious behavior in software. It also included learning about an attack against certain implementations of RSA padding. Finally, it required forging a digital signature using my own implementation of the attack.<br /><br />This was the first project in EECS 388: Introduction to Computer Security. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 388",
        language: "Python",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 388",
            "Security",
            "Hashing",
            "RSA",
            "Python"
        ]
    },
    {
        title: "Classic NP-hard Problems",
        date: "Winter 2017",
        description: "It’s election season, and you’ve been selected as the manager for Senator Lukefahr and General Paoletti’s presidential campaign. In order to triumph in the race to the White House, you must strategically plan Senator Lukefahr’s campaign trail to maximize his votes without exceeding his campaign budget. Your task is to find the optimal states for him to campaign in and plan his route to get to them.<br /><br />Project problems included creation of efficient algorithms for Knapsack problems, Minimum Spanning Tree problems, and Travelling Salesman problems.<br /><br />This was the fourth project in EECS 281: Data Structures and Algorithms. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 281",
        language: "C++",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 281",
            "NP-hard Problems",
            "Knapsack Problem",
            "Travelling Salesman Problem",
            "Algorithms",
            "C++"
        ]
    },
    {
        title: "SillyQL",
        date: "Winter 2017",
        description: "Implementation of a relational database model in which a query language (the project's SillyQL) should be able to modify and retrieve information. Project emphasis was on correctness and efficiency in memory and performance.<br /><br />This was the third project in EECS 281: Data Structures and Algorithms. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 281",
        language: "C++",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 281",
            "Database",
            "SQL",
            "Algorithms",
            "Data Structures",
            "C++"
        ]
    },
    {
        title: "Mine All Mine (Priority Queues)",
        date: "Winter 2017",
        description: "Given a collapsed mine, help the miner find their way out. Project goals included increasing understanding of priority queues, implementing generic code using inheritance and polymorphism, and implement an unfamiliar data structure (Pairing Heaps) from only academic papers and a description. Project emphasis was on correctness and efficiency in memory and performance.<br /><br />This was the second project in EECS 281: Data Structures and Algorithms. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 281",
        language: "C++",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 281",
            "Simulator",
            "Priority Queues",
            "Data Structures",
            "C++"
        ]
    },
    {
        title: "Letterman Reboot (Path Finding)",
        date: "Winter 2017",
        description: "Given a dictionary of words and optional abilities to change letters in different ways, implement \"Letterman's\" ability to tell if a starting would could be transformed into an ending word (using depth first or breadth first searching through the dictionary). Project emphasis was on correctness and efficiency in memory and performance.<br /><br />This was the first project in EECS 281: Data Structures and Algorithms. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 281",
        language: "C++",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 281",
            "Path Finding",
            "C++"
        ]
    },
    {
        title: "LC-2K Assembler, Linker, and Simulator",
        date: "Winter 2017",
        note: "4 Projects",
        description: "These projects were completed as part of EECS 370: Introduction to Computer Organization. The first project introduced implementation of assemblers for LC-2K (a University of Michigan Assembly Language) and single-cycle processor simulators. The second project introduced object files and the linking process for executable programs. The third project required implementation of a simulator for a multi-cycle, pipelined processor running LC-2K machine code instructions. The final project required implementation of a caching simulator. Together, these four projects formed a usable assembler, linker, processor simulator, and virtual memory simulator for LC-2K. I also wrote various programs in LC-2K assembly.<br /><br />Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 370",
        language: "C",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 370",
            "LC-2K",
            "Assembler",
            "Linker",
            "Simulator",
            "Virtual Memory",
            "C"
        ]
    },
    {
        title: "Machine Learning",
        date: "Fall 2016",
        description: "Uses natural language processing and machine learning techniques to automatically identify the subject of posts from the EECS 280 Piazza.<br /><br />This was the fifth project in EECS 280: Programming and Data Structures. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 280",
        language: "C++",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 280",
            "Machine Learning",
            "C++"
        ]
    },
    {
        title: "Euchre",
        date: "Fall 2016",
        description: "Euchre is a trick-taking card game popular in Michigan. It is most commonly played by four people in two partnerships with a deck of 24 cards. Partnerships accumulate points for winning tricks, and the game continues until one side reaches the maximum number of points.<br /><br />This was the third project in EECS 280: Programming and Data Structures. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 280",
        language: "C++",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 280",
            "Simulator",
            "Euchre",
            "C++"
        ]
    },
    {
        title: "Content-Aware Image Resizing",
        date: "Fall 2016",
        description: "Seam carving is a technique for content-aware resizing of images (sometimes known as \"retargeting\"). The end result is that we can resize images in a way that changes the aspect ratio but does not distort the image.<br /><br />This was the second project in EECS 280: Programming and Data Structures. Source available on request to non-students for personal evaluation, it is unavailable to students due to the University of Michigan Engineering Honor Code.",
        source: SCHOOL,
        category: "EECS 280",
        language: "C++",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            },
            {
                name: "Honor Code",
                link: "https://bulletin.engin.umich.edu/rules/"
            }
        ],
        tags: [
            "EECS 280",
            "Images",
            "C++"
        ]
    },

    // Older -----------------------------------------------------------------------------------------------------------

    {
        title: "Decentralized Election System",
        note: "Cutler-Bell Prize in High School Computing (National Winner, 2015)",
        date: "2015 - 2016",
        description: "Decentralized E-Voting System based on the Bitcoin algorithm. The project includes a working artifact demonstrating the function of an individual network node in the system.",
        source: AVAILABLE,
        category: "Personal",
        language: "Java",
        buttons: [
            {
                name: "Website",
                link: "https://mjolnircommando.github.io/DES/"
            },
            {
                name: "Github",
                link: "https://github.com/MjolnirCommando/DES"
            },
            {
                name: "Award",
                link: "https://awards.acm.org/about/2015-cutler-bell-prize"
            }
        ],
        tags: [
            "Networking",
            "Blockchain",
            "Voting",
            "Hashing",
            "Java"
        ]
    },
    {
        title: "MJGL",
        date: "2014 - Present",
        description: "Java Gaming Library, using OpenGL bindings. The library includes infrastructure for Math, Entity, Rendering, and other game utilities.",
        source: UNAVAILABLE,
        category: "Personal",
        language: "Java",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            }
        ],
        tags: [
            "Game",
            "OpenGL",
            "Library",
            "Java"
        ]
    },
    {
        title: "Trench",
        date: "2013",
        description: "A small applet-based casual game written in Java.",
        source: UNAVAILABLE,
        category: "Personal",
        language: "Java",
        buttons: [
            {
                name: "Request Source",
                link: "about.html#source-request"
            }
        ],
        tags: [
            "Game",
            "Java"
        ]
    },
    {
        title: "MineConomy",
        date: "2011 - 2013",
        description: "A Minecraft Java Server plugin using the Bukkit framework. In 2012, it was the third most downloaded Minecraft Server plugin globally.",
        source: AVAILABLE,
        category: "Personal",
        language: "Java",
        buttons: [
            {
                name: "DevBukkit",
                link: "http://dev.bukkit.org/server-mods/mineconomy"
            },
            {
                name: "Github",
                link: "https://github.com/MjolnirCommando/MineConomy"
            }
        ],
        tags: [
            "Minecraft",
            "Bukkit",
            "Java"
        ]
    }
];
