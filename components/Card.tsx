import { Card as CardType } from 'types/Card'

export const Card: React.FC<{ card: CardType }> = ({ card }) => {
  return (
    <a
      href={card.link}
      rel="noopener noreferrer"
      className="card m-4 p-6 text-left no-underline rounded-lg border border-solid border-gray-200 basis-custom hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500 active:border-blue-500 active:text-blue-500 transition-colors duration-150"
    >
      <h3 className="mt-0 mr-0 mb-4 ml-0 text-2xl">{card.title}</h3>
      <p className="m-0 text-xl leading-tight">{card.description}</p>
    </a>
  )
}
