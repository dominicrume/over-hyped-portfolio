import { Project, SkillGraphData } from './types';

export const SKILL_DATA: SkillGraphData = {
  nodes: [
    { id: "System Architecture", group: 4, val: 20 },
    { id: "Python", group: 1, val: 15 },
    { id: "TensorFlow", group: 1, val: 10 },
    { id: "Solidity", group: 2, val: 12 },
    { id: "React", group: 3, val: 10 },
    { id: "TypeScript", group: 3, val: 10 },
    { id: "Smart Contracts", group: 2, val: 15 },
    { id: "Machine Learning", group: 1, val: 18 },
    { id: "ROI Analysis", group: 4, val: 12 },
    { id: "Data Viz", group: 3, val: 8 },
    { id: "Next.js", group: 3, val: 8 },
    { id: "LLMs", group: 1, val: 14 },
    { id: "PostgreSQL", group: 3, val: 9 },
    { id: "DeFi", group: 2, val: 11 },
  ],
  links: [
    { source: "System Architecture", target: "Python", value: 5 },
    { source: "System Architecture", target: "ROI Analysis", value: 8 },
    { source: "Python", target: "TensorFlow", value: 10 },
    { source: "Python", target: "Machine Learning", value: 10 },
    { source: "Solidity", target: "Smart Contracts", value: 15 },
    { source: "Smart Contracts", target: "DeFi", value: 8 },
    { source: "System Architecture", target: "Smart Contracts", value: 4 },
    { source: "React", target: "TypeScript", value: 10 },
    { source: "React", target: "Next.js", value: 8 },
    { source: "Data Viz", target: "React", value: 5 },
    { source: "Machine Learning", target: "LLMs", value: 8 },
    { source: "ROI Analysis", target: "DeFi", value: 3 },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Autonomous Hedge Fund Agent",
    category: "AI",
    shortDescription: "LLM-driven market analysis and trade execution bot.",
    techStack: [
      { name: "Python", icon: "Code", color: "text-blue-400" },
      { name: "LangChain", icon: "Link", color: "text-green-400" },
      { name: "OpenAI", icon: "Cpu", color: "text-purple-400" }
    ],
    codeSnippet: `class TraderAgent(BaseAgent):\n  async def evaluate(self, market_data):\n    sentiment = await self.llm.analyze(market_data)\n    if sentiment.score > 0.8:\n      return self.execute_buy_order()`,
    businessMetrics: [
      { label: "Alpha Generation", value: "+14.2%", trend: "up", description: "Annualized return over baseline S&P 500." },
      { label: "Analysis Time", value: "-98%", trend: "down", description: "Reduction in time to process quarterly reports." }
    ],
    businessCase: "Hedge funds spend millions on junior analysts to read reports. This solution automates sentiment analysis and correlates it with technical indicators to identify arbitrage opportunities instantly.",
    repoLink: "#",
    liveLink: "#"
  },
  {
    id: "2",
    title: "Supply Chain Provenance Chain",
    category: "Blockchain",
    shortDescription: "Ethereum-based tracking for luxury goods authentication.",
    techStack: [
      { name: "Solidity", icon: "Box", color: "text-gray-300" },
      { name: "Hardhat", icon: "Hammer", color: "text-yellow-400" },
      { name: "React", icon: "Layout", color: "text-blue-300" }
    ],
    codeSnippet: `function verifyProduct(uint256 _id) public view returns (bool) {\n  require(products[_id].exists, "Product not found");\n  return products[_id].manufacturer == msg.sender;\n}`,
    businessMetrics: [
      { label: "Counterfeit Reduction", value: "100%", trend: "up", description: "Eliminated fake inventory in pilot markets." },
      { label: "Insurance Savings", value: "$450k", trend: "up", description: "Annual savings due to verifiable audit trails." }
    ],
    businessCase: "Luxury brands lose billions to counterfeits. This immutable ledger allows customers to verify authenticity via QR code, increasing brand trust and resale value.",
    repoLink: "#",
    liveLink: "#"
  },
  {
    id: "3",
    title: "Customer Churn Predictor",
    category: "Data Science",
    shortDescription: "Predictive model to identify at-risk enterprise clients.",
    techStack: [
      { name: "Pandas", icon: "Database", color: "text-blue-500" },
      { name: "Scikit-Learn", icon: "Binary", color: "text-orange-400" },
      { name: "FastAPI", icon: "Zap", color: "text-teal-400" }
    ],
    codeSnippet: `model = RandomForestClassifier(n_estimators=100)\nmodel.fit(X_train, y_train)\nrisk_score = model.predict_proba(customer_data)`,
    businessMetrics: [
      { label: "Retention Uplift", value: "12%", trend: "up", description: "Increase in renewed contracts." },
      { label: "Revenue Saved", value: "$1.2M", trend: "up", description: "Projected annual revenue retained." }
    ],
    businessCase: "Acquiring a new customer costs 5x more than retaining an existing one. This model flags high-risk accounts 60 days before renewal, enabling proactive CSM intervention.",
    repoLink: "#",
    liveLink: "#"
  }
];