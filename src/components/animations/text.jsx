
import GradientText from './GradientText'

export default function Text({ children }) {
    return (
        <GradientText
            colors={ ["#FF6F6F", "#55D4D9", "#D60AFF", "#55D4D9", "#D60AFF"] }
            animationSpeed={ 3 }
            showBorder={ false }
            className="bg-[#BFA2F61A] font2 md:text-lg text-sm w-fit mx-auto uppercase px-10 py-1 rounded-lg text-center border border-[#BFA2F61A]"
        >
            { children }
        </GradientText>
    )
}
