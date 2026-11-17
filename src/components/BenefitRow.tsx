const benefits = [
  { icon: '✦', title: 'Curated with care', description: 'Only things worth keeping' },
  { icon: '↗', title: 'Free shipping', description: 'On orders over $50' },
  { icon: '↺', title: 'Easy returns', description: '30 days to change your mind' },
  { icon: '♡', title: 'Made for you', description: 'Little finds, big feelings' },
]

export default function BenefitRow() {
  return (
    <div className="benefit-row">
      {benefits.map((benefit) => (
        <div key={benefit.title}>
          <span className="benefit-icon">{benefit.icon}</span>
          <span><strong>{benefit.title}</strong><small>{benefit.description}</small></span>
        </div>
      ))}
    </div>
  )
}
