import { BACKUP_VERSION, type BackupPayload } from '../models/types'

export function serializeBackup(payload: Omit<BackupPayload, 'version' | 'exportedAt'>): string {
  const body: BackupPayload = {
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    ...payload,
  }
  return JSON.stringify(body, null, 2)
}

export function parseBackup(raw: string): { ok: true; data: BackupPayload } | { ok: false; error: string } {
  try {
    const parsed = JSON.parse(raw) as Partial<BackupPayload>
    if (parsed.version !== 1) return { ok: false, error: 'Versão de backup não suportada.' }
    if (!Array.isArray(parsed.profiles) || !Array.isArray(parsed.settings)) {
      return { ok: false, error: 'Arquivo incompleto: faltam perfis ou configurações.' }
    }
    return { ok: true, data: parsed as BackupPayload }
  } catch {
    return { ok: false, error: 'JSON inválido. Nenhum dado foi alterado.' }
  }
}
