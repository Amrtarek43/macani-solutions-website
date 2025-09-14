'use client'

import { useState, useEffect, useRef } from 'react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Macani Solutions AI assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const predefinedResponses: { [key: string]: string } = {
    'hello': 'Hello! Welcome to Macani Solutions. I can help you learn about our IT consulting services, locations, careers, or answer any questions you have.',
    'services': 'We offer comprehensive IT services including:\n• IT Consulting & Strategy\n• Managed Services (24/7 Support)\n• Technology Outsourcing\n• Cloud Solutions\n\nWhich service would you like to know more about?',
    'locations': 'Macani Solutions operates in three key locations:\n• 📍 Florida, USA - Our North American headquarters\n• 📍 Dubai, UAE - Middle East operations center\n• 📍 Riyadh, Saudi Arabia - Regional hub\n\nWould you like contact information for a specific office?',
    'careers': 'We\'re always looking for talented professionals! We have opportunities in:\n• Cloud Solutions Architecture\n• IT Consulting\n• DevOps Engineering\n• Cybersecurity\n• Business Development\n\nVisit our Careers section to apply or send your resume to support@macani.llc',
    'contact': 'You can reach us at:\n📧 support@macani.llc\n📞 +966503240661\n\nOr use our contact form for detailed inquiries. We typically respond within 24 hours.',
    'pricing': 'Our pricing is customized based on your specific needs and requirements. We offer:\n• Free initial consultation\n• Competitive project rates\n• Flexible payment terms\n\nContact us for a personalized quote!',
    'support': 'We provide 24/7 support to our clients. For assistance:\n• Email: support@macani.llc\n• Phone: +966503240661\n• Emergency support available for critical issues\n\nHow can we assist you today?'
  }

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Check for keywords in the message
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response
      }
    }

    // Check for specific questions
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
      return predefinedResponses['pricing']
    }

    if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return predefinedResponses['support']
    }

    if (lowerMessage.includes('job') || lowerMessage.includes('work') || lowerMessage.includes('hiring')) {
      return predefinedResponses['careers']
    }

    if (lowerMessage.includes('office') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
      return predefinedResponses['locations']
    }

    // Default response
    return `Thank you for your message! I'd be happy to help you with information about:

• 🔧 Our IT Services
• 🏢 Office Locations  
• 💼 Career Opportunities
• 📞 Contact Information
• 💰 Pricing Information

You can also speak with a human representative by calling +966503240661 or emailing support@macani.llc`
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const quickActions = [
    { label: 'Our Services', message: 'Tell me about your services' },
    { label: 'Locations', message: 'Where are your offices located?' },
    { label: 'Careers', message: 'Do you have any job openings?' },
    { label: 'Contact', message: 'How can I contact you?' },
  ]

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#00bf63] hover:bg-[#00a555] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-50 flex items-center justify-center"
      >
        {isOpen ? (
          <span className="text-white text-2xl font-bold">×</span>
        ) : (
          <span className="text-white text-2xl">💬</span>
        )}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-6 w-96 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 transition-all duration-300 z-40 ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        {/* Chat Header */}
        <div className="bg-[#00bf63] text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div>
                <h4 className="font-bold">Macani Assistant</h4>
                <p className="text-xs opacity-90">Online • Ready to help</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-64 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg whitespace-pre-line text-sm ${
                  message.isUser
                    ? 'bg-[#00bf63] text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg rounded-bl-none">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length === 1 && (
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-1">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInputMessage(action.message)
                    setTimeout(() => {
                      handleSendMessage({ preventDefault: () => {} } as React.FormEvent)
                    }, 100)
                  }}
                  className="text-xs bg-[#00bf63]/10 text-[#00bf63] px-2 py-1 rounded-full hover:bg-[#00bf63]/20 transition-colors"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Input */}
        <div className="border-t border-gray-200 p-4">
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bf63] text-sm"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={isTyping || !inputMessage.trim()}
              className="bg-[#00bf63] text-white px-4 py-2 rounded-lg hover:bg-[#00a555] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span className="text-sm font-bold">Send</span>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
export default Chatbot
