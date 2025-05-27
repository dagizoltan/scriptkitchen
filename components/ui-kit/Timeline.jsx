// Timeline: Comprehensive activity feed with multiple variants and content types
export default function Timeline() {
  const timelineItems = [
    {
      date: "2025-01-15",
      time: "9:30 AM",
      title: "Project Kickoff",
      description: "Initial project meeting with stakeholders and team members to define scope and objectives.",
      type: "milestone",
      icon: "🚀",
      status: "completed"
    },
    {
      date: "2025-01-20",
      time: "2:15 PM",
      title: "Design Phase Complete",
      description: "All wireframes and mockups approved by the design team and stakeholders.",
      type: "achievement",
      icon: "🎨",
      status: "completed"
    },
    {
      date: "2025-01-25",
      time: "11:00 AM",
      title: "Development Started",
      description: "Backend API development initiated with core functionality implementation.",
      type: "progress",
      icon: "⚡",
      status: "in-progress"
    },
    {
      date: "2025-02-01",
      time: "4:30 PM",
      title: "Testing Phase",
      description: "Comprehensive testing including unit tests, integration tests, and user acceptance testing.",
      type: "testing",
      icon: "🧪",
      status: "pending"
    },
    {
      date: "2025-02-10",
      time: "10:00 AM",
      title: "Production Deployment",
      description: "Final deployment to production environment with monitoring and analytics setup.",
      type: "milestone",
      icon: "🎯",
      status: "pending"
    }
  ];

  const basicItems = [
    { date: "2025-01-01", label: "Project started", type: "start" },
    { date: "2025-01-15", label: "First milestone reached", type: "milestone" },
    { date: "2025-01-30", label: "Beta version released", type: "release" },
    { date: "2025-02-15", label: "Production launch", type: "launch" }
  ];

  return (
    <div className="timeline-demo">
      {/* Enhanced Timeline */}
      <div>
        <h3>Enhanced Timeline</h3>
        <p>Rich timeline with detailed information, icons, status indicators, and multiple content types.</p>
        
        <div className="timeline enhanced">
          {timelineItems.map((item, index) => (
            <div key={index} className={`timeline-item ${item.type} ${item.status}`}>
              <div className="timeline-marker">
                <span className="timeline-icon">{item.icon}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4 className="timeline-title">{item.title}</h4>
                  <div className="timeline-meta">
                    <time className="timeline-date" dateTime={item.date}>{item.date}</time>
                    <span className="timeline-time">{item.time}</span>
                  </div>
                </div>
                <p className="timeline-description">{item.description}</p>
                <span className={`timeline-status ${item.status}`}>
                  {item.status === 'completed' && '✓ Completed'}
                  {item.status === 'in-progress' && '⏳ In Progress'}
                  {item.status === 'pending' && '⏸️ Pending'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Basic Timeline */}
      <div>
        <h3>Basic Timeline</h3>
        <p>Simple timeline with essential information and clean visual hierarchy.</p>
        
        <div className="timeline basic">
          {basicItems.map((item, index) => (
            <div key={index} className={`timeline-item ${item.type}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <time className="timeline-date" dateTime={item.date}>{item.date}</time>
                <span className="timeline-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Timeline */}
      <div>
        <h3>Horizontal Timeline</h3>
        <p>Timeline layout optimized for wide screens with horizontal progression.</p>
        
        <div className="timeline horizontal">
          {basicItems.map((item, index) => (
            <div key={index} className={`timeline-item ${item.type}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <time className="timeline-date" dateTime={item.date}>{item.date}</time>
                <span className="timeline-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compact Timeline */}
      <div>
        <h3>Compact Timeline</h3>
        <p>Space-efficient timeline variant perfect for sidebars and narrow containers.</p>
        
        <div className="timeline compact">
          {basicItems.slice(0, 3).map((item, index) => (
            <div key={index} className={`timeline-item ${item.type}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <time className="timeline-date" dateTime={item.date}>{item.date}</time>
                <span className="timeline-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Notes */}
      <div className="usage-notes">
        <h3>Timeline Features</h3>
        <ul>
          <li><strong>Multiple Variants:</strong> Enhanced, basic, horizontal, and compact layouts</li>
          <li><strong>Status Indicators:</strong> Completed, in-progress, and pending states</li>
          <li><strong>Content Types:</strong> Support for icons, descriptions, dates, and meta information</li>
          <li><strong>Visual Hierarchy:</strong> Clear separation with markers, colors, and typography</li>
          <li><strong>Responsive Design:</strong> Adapts to different screen sizes automatically</li>
          <li><strong>Accessibility:</strong> Proper semantic HTML with time elements and ARIA labels</li>
          <li><strong>Theme Support:</strong> Works with light and dark themes</li>
          <li><strong>Customization:</strong> Easy to style with CSS custom properties</li>
        </ul>
      </div>
    </div>
  );
}
