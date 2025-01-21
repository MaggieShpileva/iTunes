/**
 * Import: Components
 */
import { Button } from '@components/Button'

/**
 * Import: Types
 */
import { ButtonType } from '@components/Button'

export const GroupSelector = ({
    groups,
    currentGroup,
    onGroupSelect,
}: {
    groups: string[]
    currentGroup: string | null
    onGroupSelect: (group: string) => void
}) => {
    return (
        <div className='py-3 flex flex-wrap gap-4'>
            {groups.map((group, index) => (
                <Button
                    key={`wrapper_type_item-${index}`}
                    buttonType={ButtonType.SECONDARY}
                    text={group}
                    onClick={() => onGroupSelect(group)}
                    className={`px-8 ${currentGroup === group ? 'bg-white text-black' : ''}`}
                />
            ))}
        </div>
    )
}
