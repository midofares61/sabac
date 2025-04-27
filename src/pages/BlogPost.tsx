import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag,
  ArrowLeft,
  Share2,
  ThumbsUp,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Mail
} from 'lucide-react';

// This would typically come from an API or CMS
const blogPostsData = {
  'prevent-frozen-pipes': {
    title: 'How to Prevent Frozen Pipes This Winter',
    content: `
      <p class="lead">As winter approaches, one of the biggest concerns for homeowners is the risk of frozen pipes. Not only can frozen pipes disrupt your water supply, but they can also burst and cause extensive water damage that's expensive to repair.</p>
      
      <p>At ProPlumb, we respond to dozens of emergency calls every winter for burst pipes. The good news is that most of these incidents are preventable with some simple precautions.</p>
      
      <h2>Why Do Pipes Freeze?</h2>
      
      <p>Pipes freeze when the water inside them turns to ice as temperatures drop below freezing. As water freezes, it expands, putting immense pressure on the pipe walls. This pressure can cause pipes to crack or burst, leading to leaks and water damage when the ice thaws.</p>
      
      <p>The pipes most at risk are:</p>
      
      <ul>
        <li>Pipes in unheated interior spaces like basements, attics, and garages</li>
        <li>Pipes that run along exterior walls with little or no insulation</li>
        <li>Exterior water lines, such as garden hose bibs, swimming pool supply lines, and sprinkler systems</li>
      </ul>
      
      <h2>Prevention Tips</h2>
      
      <h3>Before Cold Weather Hits</h3>
      
      <p><strong>Insulate vulnerable pipes:</strong> Use foam pipe insulation sleeves, which are inexpensive and easy to install. Pay special attention to pipes in unheated areas.</p>
      
      <p><strong>Seal leaks and cracks:</strong> Use caulk or insulation to seal leaks around doors, windows, and where pipes enter your home to prevent cold air from reaching your pipes.</p>
      
      <p><strong>Disconnect and drain outdoor hoses:</strong> Before winter arrives, disconnect garden hoses and drain water from pipes leading to outdoor faucets. If possible, shut off the indoor valve that supplies these outdoor fixtures.</p>
      
      <h3>During Cold Weather</h3>
      
      <p><strong>Keep your thermostat set consistently:</strong> Maintain the same temperature day and night. While you might be tempted to lower the heat when you're sleeping or away from home, a consistent temperature minimizes the risk of pipes freezing.</p>
      
      <p><strong>Allow faucets to drip:</strong> When temperatures drop significantly, allow faucets served by exposed pipes to drip slightly. Running water, even at a trickle, helps prevent pipes from freezing.</p>
      
      <p><strong>Keep interior doors open:</strong> Leave interior doors open to allow heat to circulate throughout your home, especially if you have pipes running through cabinets or against exterior walls.</p>
      
      <p><strong>Keep garage doors closed:</strong> If you have water supply lines in your garage, keep the garage doors closed to maintain a higher temperature.</p>
      
      <h3>If You're Away From Home</h3>
      
      <p><strong>Set your thermostat:</strong> Keep your home heated to at least 55°F (13°C) when you're away.</p>
      
      <p><strong>Have someone check your home:</strong> Ask a friend or neighbor to check your house regularly to make sure it's warm enough to prevent frozen pipes.</p>
      
      <p><strong>Consider shutting off the water:</strong> For extended absences during severe cold, consider shutting off the water supply to your home and draining the pipes.</p>
      
      <h2>What to Do If Your Pipes Freeze</h2>
      
      <p>If you turn on a faucet and only a trickle comes out, you may have a frozen pipe. Here's what to do:</p>
      
      <ol>
        <li><strong>Keep the faucet open:</strong> As you treat the frozen pipe, water will begin to flow through the frozen area. Running water helps melt the ice in the pipe.</li>
        <li><strong>Apply heat to the frozen section:</strong> Use an electric heating pad, a hair dryer, or towels soaked in hot water. Never use an open flame device like a blowtorch or propane heater.</li>
        <li><strong>Continue applying heat:</strong> Until full water pressure is restored.</li>
        <li><strong>Check all other faucets:</strong> If one pipe freezes, others may have frozen as well.</li>
      </ol>
      
      <p>If you cannot locate the frozen area, if it's not accessible, or if you cannot thaw the pipe, call a licensed plumber right away.</p>
      
      <h2>When to Call a Professional</h2>
      
      <p>While these preventive measures can significantly reduce the risk of frozen pipes, sometimes professional help is necessary. Contact ProPlumb if:</p>
      
      <ul>
        <li>You're unable to locate or access the frozen pipe</li>
        <li>The frozen pipe is behind a wall or in an area difficult to reach</li>
        <li>You're concerned about nearby electrical wiring when thawing the pipe</li>
        <li>The pipe has already burst</li>
        <li>You want a professional inspection to identify vulnerabilities in your plumbing system</li>
      </ul>
      
      <p>Our team of licensed plumbers is available 24/7 for emergency frozen pipe situations. We have the tools and expertise to safely thaw frozen pipes and repair any damage.</p>
      
      <h2>Conclusion</h2>
      
      <p>Taking preventive measures now can save you from the headache and expense of dealing with frozen or burst pipes later. By following these tips, you can protect your home's plumbing system and enjoy peace of mind throughout the winter season.</p>
      
      <p>Have questions about preparing your plumbing for winter? Contact our team at ProPlumb for expert advice and professional service.</p>
    `,
    author: 'John Winters',
    date: 'December 15, 2023',
    image: 'https://images.pexels.com/photos/6265939/pexels-photo-6265939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Winter Tips',
    tags: ['Frozen Pipes', 'Winter', 'Maintenance', 'Prevention']
  },
  'water-heater-maintenance': {
    title: '5 Signs Your Water Heater Needs Maintenance',
    content: `
      <p class="lead">Your water heater works hard to provide hot water for showers, washing dishes, doing laundry, and more. Like any appliance, it requires regular maintenance to function efficiently and last as long as possible.</p>
      
      <p>Many homeowners don't think about their water heater until it stops working altogether. By recognizing the early warning signs of water heater problems, you can address issues before they lead to a cold shower or, worse, water damage in your home.</p>
      
      <h2>Common Warning Signs Your Water Heater Needs Attention</h2>
      
      <h3>1. Rusty or Discolored Water</h3>
      
      <p>If your hot water has a rusty, reddish-brown tint, this could indicate that your water heater tank is rusting from the inside. As the rust builds up, it can contaminate your water supply.</p>
      
      <p><strong>What to do:</strong> First, determine if the discoloration affects both hot and cold water or just hot water. If it's only the hot water, the issue is likely with your water heater. If both hot and cold water are affected, the problem might be in your home's plumbing or the water supply itself.</p>
      
      <p>For water heaters, rust often indicates that the anode rod—a component designed to attract corrosive elements and protect the tank—has deteriorated and needs replacement. A professional plumber can replace the anode rod and potentially extend the life of your water heater.</p>
      
      <h3>2. Strange Noises Coming from the Tank</h3>
      
      <p>Is your water heater making popping, cracking, or rumbling sounds? These noises often result from sediment buildup on the bottom of the tank. As the sediment hardens and becomes disturbed by the heating element, it creates these distinctive sounds.</p>
      
      <p><strong>What to do:</strong> Sediment buildup reduces your water heater's efficiency and can lead to premature failure if not addressed. The solution is to flush the tank, which removes the accumulated sediment. While you can do this yourself with the right tools and knowledge, many homeowners prefer to have a professional handle this maintenance task to ensure it's done correctly.</p>
      
      <h3>3. Water Leaking Around the Base of the Heater</h3>
      
      <p>If you notice water pooling around your water heater, you have a leak that needs immediate attention. Leaks can stem from several issues:</p>
      
      <ul>
        <li>Loose connections</li>
        <li>Corroded tank</li>
        <li>Faulty temperature and pressure relief valve</li>
        <li>Leaking from the drain valve</li>
      </ul>
      
      <p><strong>What to do:</strong> First, check connections and valves to see if tightening them resolves the issue. If the tank itself is leaking, it usually indicates that the internal tank has corroded through, and replacement will be necessary. Don't delay addressing leaks, as they can cause water damage to your home and potentially lead to dangerous situations if the water comes into contact with electrical components.</p>
      
      <h3>4. Inconsistent Water Temperature</h3>
      
      <p>If your shower suddenly turns cold before you're finished, or if your hot water seems to run out faster than it used to, your water heater may be struggling to keep up with demand.</p>
      
      <p><strong>What to do:</strong> These issues could be caused by:</p>
      
      <ul>
        <li>A failing heating element</li>
        <li>Thermostat problems</li>
        <li>Sediment buildup reducing capacity</li>
        <li>A water heater that's too small for your household's needs</li>
      </ul>
      
      <p>A professional can diagnose and repair thermostat and heating element issues. If sediment is the problem, flushing the tank may help. If your household's hot water needs have increased, you might consider upgrading to a larger tank or a tankless water heater for unlimited hot water.</p>
      
      <h3>5. Age of Your Water Heater</h3>
      
      <p>Most traditional tank water heaters last 8-12 years. If yours is approaching or has exceeded this age range, even if it's still functioning, it's likely operating inefficiently and could fail soon.</p>
      
      <p><strong>What to do:</strong> Check your water heater's age by locating the serial number on the manufacturer's label. The first two digits typically represent the year of manufacture.</p>
      
      <p>If your water heater is nearing the end of its expected lifespan, start researching replacement options. Modern water heaters are significantly more energy-efficient, potentially saving you money on utility bills. Consider whether a traditional tank heater, tankless system, or heat pump water heater would best suit your needs.</p>
      
      <h2>Preventative Maintenance for Water Heaters</h2>
      
      <p>Regular maintenance can extend the life of your water heater and help it operate efficiently. Here are some recommended maintenance tasks:</p>
      
      <ul>
        <li><strong>Annual flushing:</strong> Removes sediment from the tank</li>
        <li><strong>Inspect the anode rod every 2-3 years:</strong> Replace if significantly corroded</li>
        <li><strong>Test the pressure relief valve annually:</strong> Ensures this important safety feature works properly</li>
        <li><strong>Check for leaks regularly:</strong> Early detection prevents water damage</li>
        <li><strong>Adjust the temperature setting:</strong> 120°F is recommended for safety and efficiency</li>
      </ul>
      
      <h2>When to Call a Professional</h2>
      
      <p>While some minor water heater maintenance can be performed by homeowners, many tasks are best left to professionals. Contact ProPlumb when:</p>
      
      <ul>
        <li>You're unsure about how to safely perform maintenance tasks</li>
        <li>Your water heater is leaking</li>
        <li>You need a heating element or thermostat replaced</li>
        <li>You're considering a water heater replacement</li>
        <li>Your water heater is making loud or unusual noises</li>
        <li>You want to set up a regular maintenance schedule</li>
      </ul>
      
      <p>Our licensed technicians have the expertise, tools, and parts to keep your water heater operating safely and efficiently. We can help you extend the life of your current unit or recommend the best replacement options when the time comes.</p>
      
      <h2>Conclusion</h2>
      
      <p>Your water heater is an essential but often overlooked component of your home's plumbing system. By paying attention to these warning signs and investing in regular maintenance, you can avoid the inconvenience of unexpected cold showers and potentially save money on emergency repairs or premature replacement.</p>
      
      <p>Need help with your water heater? Contact ProPlumb today to schedule a professional inspection or maintenance service.</p>
    `,
    author: 'Mike Rodriguez',
    date: 'November 8, 2023',
    image: 'https://images.pexels.com/photos/6492398/pexels-photo-6492398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Maintenance',
    tags: ['Water Heater', 'Maintenance', 'Repair', 'Energy Efficiency']
  },
  // Other blog posts would be defined similarly
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug as keyof typeof blogPostsData] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-4">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-lg text-neutral-700 mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/blog" className="btn btn-primary inline-flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="h-96 w-full relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl mx-auto text-center"
              >
                <span className="inline-block bg-primary-600 text-white text-sm font-bold uppercase tracking-wider px-3 py-1 rounded mb-4">
                  {post.category}
                </span>
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center justify-center text-white gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-8">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>

            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-neutral-700 font-medium">Tags:</span>
                {post.tags.map((tag, index) => (
                  <Link 
                    key={index}
                    to={`/blog?tag=${tag}`}
                    className="inline-flex items-center bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full px-3 py-1 text-sm"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-b border-neutral-200 py-6">
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-neutral-700 hover:text-primary-600">
                  <ThumbsUp className="h-5 w-5 mr-1" />
                  <span>Like</span>
                </button>
                <button className="flex items-center text-neutral-700 hover:text-primary-600">
                  <MessageCircle className="h-5 w-5 mr-1" />
                  <span>Comment</span>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-neutral-600 mr-2">Share:</span>
                <a href="#" className="text-neutral-700 hover:text-[#3b5998]">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-neutral-700 hover:text-[#1DA1F2]">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-neutral-700 hover:text-[#0077B5]">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-neutral-700 hover:text-[#D44638]">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="mt-12 bg-primary-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Need Professional Plumbing Help?</h3>
              <p className="text-neutral-700 mb-6">
                Our team of licensed plumbers is ready to assist with all your plumbing needs, from repairs and maintenance to new installations.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
                <a href="tel:+18005551234" className="btn bg-white text-primary-900 border border-primary-200 hover:bg-primary-100 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts would go here */}
    </>
  );
};

export default BlogPost;