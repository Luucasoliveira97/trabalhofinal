import { Router } from 'express';
import { getbook, register, deletebook, updatebook} from '../controllers/bookController';

const router = Router();

router.get('/getbook', getbook)
router.post('/newbook', register)
router.delete('/deletebook/:id', deletebook)
router.put('/update/:id', updatebook)

export default router;