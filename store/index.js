import works from '@/assets/json/works.json'
import contact from '@/assets/json/contact.json'
import skills from '@/assets/json/skills.json'

export const state = () => ({
  projectData: works,
  contactData: contact,
  pickupData: works.filter((v) => v.pickup.pickupFlag),
  awardData: skills,
  awardDataLength: {
    webTotalLength: skills.filter((v) => v.group === 'WEB').length,
    designTotalLength: skills.filter((v) => v.group === 'DESIGN').length,
    aiTotalLength: skills.filter((v) => v.group === 'AI').length,
  },
})

export const getters = {
  projectData(state) {
    return state.projectData
  },
  contactData(state) {
    return state.contactData
  },
  pickupData(state) {
    return state.pickupData
  },
  awardData(state) {
    return state.awardData
  },
  awardDataLength(state) {
    return state.awardDataLength
  },
}
