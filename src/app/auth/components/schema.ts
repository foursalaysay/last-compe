import { z } from 'zod';

export const RegisterSchema = z.
    object({
        name : z.string().min(4),
        address : z.string(),
        contact : z.string(),
        email : z.string().email(),

    })