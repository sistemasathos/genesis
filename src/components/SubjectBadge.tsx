import { DISCIPLINE_LABEL } from '../data/contest'
import { DISCIPLINE_TONE } from '../ui/labels'
import type { DisciplineId } from '../models/types'

export function SubjectBadge({ id }: { id: DisciplineId }) {
  return <span className={`badge ${DISCIPLINE_TONE[id]}`}>{DISCIPLINE_LABEL[id]}</span>
}
